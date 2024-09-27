import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <ul className="navbar">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">User</NavLink></li>
            <li><NavLink to="/books">Book</NavLink></li>
        </ul>
    )
}

export default Header;