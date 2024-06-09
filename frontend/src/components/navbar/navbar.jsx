import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <nav>
            <div className='Blue_banner'>
                <p>Get free shipping on all order , click here to claim now!!</p>
            </div>
            <div className='Mid_nav_section'>
                <Link to=""><img id="logo" src="https://logos-world.net/wp-content/uploads/2022/02/Sephora-Logo.png" /></Link>
                <div id="search_container">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                    <input id="search" />
                    <button>Search</button>
                </div>
                <div id="nav_options">

                    <div className="icon_info">

                        <span className="material-symbols-outlined">
                            storefront
                        </span>
                        <p>Stores and Services</p>
                    </div>
                    <div className="icon_info">
                        <span className="material-symbols-outlined">
                            groups
                        </span>
                        <p>Community</p>
                    </div>
                    <div className="icon_info">
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        <p>Sign in</p>
                    </div>


                </div>

                <Link to="/cart">
                    <div id="cart_wrapper">
                        <span id="cart" className="material-symbols-outlined">
                            local_mall
                        </span>
                    </div>
                </Link>


            </div>
            <div className='Bottom_nav'>
                <Link to="/makeup">Makeup</Link>
                <Link to="/skincare">Skincare</Link>
                <Link to="/haircare">Haircare</Link>
                <Link to="/fragrance">Fragrance</Link>
                <Link to="/bath-and-body">Bath and Body</Link>
            </div>

        </nav>
    )
}

export { Navbar }