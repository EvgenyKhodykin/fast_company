import { React } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function NavBar() {
    return (
        <nav className='nav nav-pills'>
            <Link className='nav-link' to='/'>
                Main
            </Link>

            <Link className='nav-link' to='/login'>
                Login
            </Link>

            <Link className='nav-link' to='/users'>
                Users
            </Link>
        </nav>
    )
}

export default NavBar
