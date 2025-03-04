import Navbar from "./Navbar.jsx";

export default function Header() {

    const links = [
        { id: 1, text: 'HomePage', url: '/' },
        { id: 3, text: 'List', url: '/list' },
    ];


    return (
        <header>
            <Navbar linksProp={links} />
        </header>
    );

}