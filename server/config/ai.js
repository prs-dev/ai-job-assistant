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

module.exports = aiResponse


