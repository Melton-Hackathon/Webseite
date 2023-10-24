"use client"
interface NavbarLinksProps {
    config: {
        navlinks: {
            name: string;
            href: string;
            peremissions: string;
            hidden?: boolean;
        }[];
        baseView: string;
    };
}

export default function Navbar_links({ config }: NavbarLinksProps) {
    const navlinkArr = config.navlinks;
    const baseView = config.baseView;

    const navlinkArr_result = navlinkArr.map(Link => (
        <a className="nav-item" href={baseView + Link.href} key={Link.name}>
            {Link.name}
        </a>
    ));

    return (
        <div className="navlink-container">
            {navlinkArr_result}
        </div>
    );
}
