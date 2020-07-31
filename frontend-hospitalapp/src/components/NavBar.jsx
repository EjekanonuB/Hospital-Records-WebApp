import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <section className='d-none d-sm-block'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <Link className='navbar-brand' to='/'>
          ourHospitalApp
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse mx-left' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link ' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  to='/departments'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Departments
                </Link>
                <div
                  className='dropdown-menu bg-dark'
                  aria-labelledby='navbarDropdown'
                >
                  <Link className='dropdown-item text-success' to='/departments/paediatric'>
                    Paediatrics
                  </Link>
                  <Link className='dropdown-item text-success' to='/departments/physiotherapy'>
                    Physiotherapy
                  </Link>
                  <Link className='dropdown-item text-success' to='/departments/commed'>
                    Community Medicine
                  </Link>
                  <Link className='dropdown-item text-success' to='/departments/labouratory'>
                    Labouratory
                  </Link>
                  <Link className='dropdown-item text-success' to='/departments/medicine'>
                    Medicine
                  </Link>
                  <Link className='dropdown-item text-success' to='/departments/surgery'>
                    Surgery
                  </Link>
                  <Link className='dropdown-item text-success' to='/departments/admin'>
                    Admin
                  </Link>
                </div>
              </li>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact Us
              </Link>
            </li>
          </ul>
          <Link to='/commonlogin'>
            <button
              className='btn btn-outline-success text-light bg-success mx-5 my-2 my-sm-0'
              type='submit'
            >
              Login
            </button>
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
