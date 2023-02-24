import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.Home}</a>
            {/* <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link> */}
        </li>
        {/* <li className="nav-item">
            <a className="nav-link" href="/">{props.Link}</a>
        </li> */}
            {/* <Link className="nav-link" to="/">{props.Link}</Link> */}
             {/* dropdown */}
        {/*dropdown-toggle data-bs-toggle="dropdown" */}
        {/* <li className="nav-item ">
            <Link className="nav-link "  role="button"  aria-expanded="false" to="/about">{props.AboutUs}</Link>
        </li> */}
        </ul>
        <div className= {`form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"  />
            <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">{props.Search}</button>
        </form> */}
            </div>
        </div>
    </nav>
    )
}
Navbar.propTypes= {title:PropTypes.string,
                    Home:PropTypes.string,
                    Link:PropTypes.string,
                    AboutUs: PropTypes.string,
                    Search: PropTypes.string,}
Navbar.defaultProps={
                    title:"Set Title ",
                    Home:"Set Home",
                    Link:"Set Link",
                    AboutUs:"Set About",
                    Search:"Set Search",
}