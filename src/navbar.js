import React from 'react'
import Links from './links'

const Navbar = () => {
    return (
        <div className="nav_bar">
            <p id="brandname">Lodger</p>
            <div className="links">
                <Links />
            </div>
        </div>
    )
}

export default Navbar
