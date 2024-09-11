import './header.css'

const Header = () => {
    return (
        <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/users">User</a></li>
            <li><a href="/books">Book</a></li>
        </ul>
    )
}

export default Header;