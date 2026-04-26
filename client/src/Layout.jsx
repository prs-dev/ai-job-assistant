import {Outlet, Navigate} from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&#169; prs-dev</p>
            </footer>
        </>
    )
}

export default Layout