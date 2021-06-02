import Links from './Links'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <p id="brandname"><a href="#">Lodger</a></p>
            <div className="links-container">
                <Links />
            </div>
        </div>
    )
}

export default Navbar
