import { NavLink } from "react-router-dom"

export default function NavButton(props) {
    return (
        <>
            <NavLink to={props.path}>
                <button>{props.name}</button>
            </NavLink>
        </>
    )
}