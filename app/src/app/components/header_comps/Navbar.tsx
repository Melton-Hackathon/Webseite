//Import components
import Navbar_links from "./Navbar_links"

const navlinkConfig = {
    navlinks: [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Stats",
            href: "/stats"
        },
        {
            name: "What is melton?",
            href: "/wim_static"
        },
        {
            name: "About",
            href: "/about"
        }
    ]
}

const checkLogin = () => {
    return false
}

export default function Navbar() {
    return (
        <nav>
            <Navbar_links config={navlinkConfig} />
            <div>
                {
                    checkLogin() ? <a href="/profile">Profile</a> : <a href="/login">Login</a>
                }
            </div>
        </nav>
    )
}