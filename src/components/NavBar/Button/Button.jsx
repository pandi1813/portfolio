import { NavLink } from "react-router-dom"
import './button.css'

export default function NavButton(props) {
    return (
        <>
            <NavLink to={props.path}>
                <button className="nav-btn">{props.name}</button>
            </NavLink>
        </>
    )
}