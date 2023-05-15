import NavButton from "./Button/Button"
import './navbar.css'

export default function NavBar() {
    return (
        <nav id="navbar">
            <a href="/">
                <div id="profile" className="flex gap-2">
                    <img id='logo' src="./images/ap-logo-1.png" alt="logo" />
                    <p>Andrea Peter | Front-end developer</p>
                </div>
            </a>
            <div id="nav-buttons" className="grid grid-rows-1 grid-cols-3">
                <NavButton className='nav-btn' name="About" path="/about" />
                <NavButton className='nav-btn' name="Projects" path="/projects" />
                <NavButton className='nav-btn' name="Contact" path="contact" />
            </div>

        </nav>
    )
}