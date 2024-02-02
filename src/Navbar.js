import React from 'react';
import Dropdown from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // <div>
    //     <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
    //         <div class="container-fluid">
    //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //             <Link class="navbar-brand" to="#">Navbar</Link>
    //             <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    //                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //                     <li class="nav-item">
    //                         <Link class="nav-link active" aria-current="page" to="/">Home</Link>
    //                     </li>
    //                     <li class="nav-item">
    //                         <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
    //                     </li>
    //                     <li class="nav-item">
    //                         <Link class="nav-link active" aria-current="page" to="/blogs">Blog</Link>
    //                     </li>
    //                 </ul>
    //                 <form class="d-flex">
    //                     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
    //                     <button class="btn btn-outline-primary" type="submit">Search</button>
    //                 </form>
    //             </div>
    //         </div>
    //     </nav>
    // </div>
    <nav class="navbar navbar-expand-lg navbar-light shadow p-2 fixed">
      <div class="container-fluid">
        <img id='logo' src={process.env.PUBLIC_URL + "/img/logo.png"}></img>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" href="#">Medicines</Link>
            </li>
            {/* <li class="nav-item">
                            <Link class="nav-link" href="#"><div class="dropdown">
                                <button
                                    class="btn btn-light"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown button
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div></Link>
                        </li> */}
            <li>
              <Dropdown.Toggle variant="success" id="dropdown-basic">Personal Care</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
              {/* <Link class="nav-link" href="#">Personal Care</Link> */}
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">Health Conditions</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">Vitamins & Supplements</Link>
            </li>
            {/* <li class="nav-item">
                        <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
    data-mdb-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li>
      <a class="dropdown-item" href="#">Another action</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        Submenu &raquo;
      </a>
      <ul class="dropdown-menu dropdown-submenu">
        <li>
          <a class="dropdown-item" href="#">Submenu item 1</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Submenu item 2</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Submenu item 3 &raquo; </a>
          <ul class="dropdown-menu dropdown-submenu">
            <li>
              <a class="dropdown-item" href="#">Multi level 1</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Multi level 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a class="dropdown-item" href="#">Submenu item 4</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Submenu item 5</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
                        </li> */}
            <li>
              <Link class="nav-link" href="#">Diabetes Care</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">Healthcare Devices</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">Health Article</Link>
            </li>
          </ul>
          <form class="d-flex ms-3">
            <a style={{ color: 'blue', marginRight: '10px' }} href='www.google.com'><b>Login</b></a>
            <a href='www.google.com'><i class="bi bi-cart-plus"></i> <b>Cart</b></a>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;