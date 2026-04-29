import {Outlet, Navigate} from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <>
            <nav className='w-full p-2 flex items-center justify-between h-[50px] text-gray-200 bg-gray-800'>
                <Navbar />
            </nav>
            <main className='text-gray-200 bg-gray-800 h-[calc(100vh-70px)]'>
                <Outlet />
            </main>
            <footer className='w-full text-center fixed bottom-0 bg-gray-800 text-gray-200 p-1'>
                <p>&#169; prs-dev</p>
            </footer>
        </>
    )
}

export default Layout