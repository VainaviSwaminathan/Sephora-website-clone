import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/makeup">Makeup</Link>
            <Link to="/skincare">Skincare</Link>
            <Link to="/haircare">Haircare</Link>
            <Link to="/fragrance">Fragrance</Link>
            <Link to="/bath-and-body">Bath and Body</Link>
        </nav>
    )
}

export { Navbar }