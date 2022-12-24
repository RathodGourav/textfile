import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
  <div className=" container-fluid">
    <Link className="navbar-brand" to='/home ' >{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/home">{props.homeText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">{props.aboutText}</Link>
        </li>
        
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success butt" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

    </div>
    <hr/>
    </>
  )
}
Navbar.propTypes={title: PropTypes.string,
                  aboutText:PropTypes.string,}
 Navbar.defaultProps = {
                        title: 'Add title here',
                        aboutText: 'add aboutText here '
                        };
                  
