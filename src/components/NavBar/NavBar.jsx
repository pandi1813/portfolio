import NavButton from "./Button/Button"


export default function NavBar() {
    return (
        <nav id="navbar">
           <NavButton name="About"/>
           <NavButton name="Projects"/>
           <NavButton name="Contact"/>

        </nav>
    )
}