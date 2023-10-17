export default function Navbar_links (config) {
    const navlinkArr = config.navlinks

    let navlinkArr_result = []
    navlinkArr.forEach(link => {
        navlinkArr_result.push(<a className="nav-item" href={link.href}>{link.name}</a>)
    });

    return(
        <div className="navlink-container">
            {navlinkArr_result}
        </div>
    )
}