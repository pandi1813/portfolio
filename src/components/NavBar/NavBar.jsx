import NavButton from "./Button/Button"
import './navbar.css'

export default function NavBar() {
    return (
        <nav id="navbar">
           <NavButton name="About" path="/about"/>
           <NavButton name="Projects" path="/projects"/>
           <NavButton name="Contact" path="contact" />

        </nav>
    )
}