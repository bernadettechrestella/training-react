import { Link } from 'react-router-dom'

const MenuBar = () => (
    <header className="site-header">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    </header>
)

export default MenuBar
