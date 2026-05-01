const { ChatOpenRouter } = require("@langchain/openrouter")
const { SystemMessage, HumanMessage } = require("@langchain/core/messages")

const model = new ChatOpenRouter({
    model: "openai/gpt-oss-20b:free",
    temperature: 0.3,
    apiKey: process.env.AIKEY
})

const messages = [
    new SystemMessage(
        `You are a helpful AI assistant that summarizes job descriptions in JSON format
                Format example:
                {
                    "summary": "Frontend developer role focusing on React...",
                    "skills": ["React", "JavaScript", "CSS", "REST APIs"],
                    "experience": "1-3 years",
                    "keywords": ["SPA", "performance", "responsive design"], 
                    "additional_info: "anything can be addtional, like contact info etc in String format"
                }
                    YOU ONLY PRODUCE JSON AND USE ONLY THESE FIELDS
            `
    )
]

const aiResponse = async(input) => {
    const newMessages = [...messages, new HumanMessage(input)]
    const res = await model.invoke(newMessages)
    if(res.content) {
        const data = JSON.parse(res.content)
        if(!data) { //refetch once if data is broken
            const fetchAgain = await model.invoke(newMessages)
            return JSON.parse(fetchAgain)
        } else {
            return data
        }
    }
}

const aiCover = async(input) => {
    const messages = [
        new SystemMessage(`
                You are a helpful job assistant
                You generate a short cover letter based on provided job description
            `),
            new HumanMessage(input)
    ]
    const res = await model.invoke(messages)
    return res.content
}

const aiCompare = async(input, resumeData) => {
    const messages = [
        new SystemMessage(`
                You are a helpful AI job assistant
                You compare and give scores and improvements in JSON format by comparing and
                analysing both provided JOB DESCRIPTION and RESUME DETAILS
                You will provide the output in following format:
                {
                    score: out of 10, scored on how resume fares against the job requirements,
                    improvements: suggested improvements based on what should be improved in resume to increase chances of getting hired, in ARRAY
                }
                YOU WILL ONLY ANSWER IN JSON FORMAT
            `),
            new HumanMessage(`
                job description: ${input},
                resume details: ${resumeData}
                `)
    ]
    const res = await model.invoke(messages)
    return res.content
}

module.exports = {aiResponse, aiCover, aiCompare}


