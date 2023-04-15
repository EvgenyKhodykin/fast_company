import { React } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function NavBar() {
    return (
        <nav className='nav nav-pills m-2'>
            <NavLink className='nav-link' aria-current='page' to='/' exact>
                Main
            </NavLink>

            <NavLink className='nav-link' to='/login'>
                Login
            </NavLink>

            <NavLink className='nav-link' to='/users'>
                Users
            </NavLink>
        </nav>
    )
}

export default NavBar
