import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          useContext
        </Link>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink
              className={(isActive) =>
                'nav-link' + (!isActive ? ' unselected' : '')
              }
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={(isActive) =>
                'nav-link' + (!isActive ? ' unselected' : '')
              }
              to='/about'
            >
              About
            </NavLink>
            <NavLink
              className={(isActive) =>
                'nav-link' + (!isActive ? ' unselected' : '')
              }
              to='/login'
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

{
  /* <navbar>
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/about'>About</Link>
    </li>
    <li>
      <Link to='/login'>Login</Link>
    </li>
  </ul>
</navbar> */
}
