import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={ ( {isActive} ) => isActive? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={ ( {isActive} ) => isActive? "active" : ""}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/starwarsCharacter" className={ ( {isActive} ) => isActive? "active" : ""}>StarwarsCharacter</NavLink>
                </li>
            </ul>
        </nav>
      </header>
    </>
  )
}
