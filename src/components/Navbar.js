import React from 'react'
import '../css/components/navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (  
  
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h5 className="navbar-brand">Michael.D</h5>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            </div>
          </div>
      </nav>
    </div>
 
  
  )
}

export default Navbar
