import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className='border-top text-center small text-muted py-3 bg-dark footer'>
        <p>
          <Link to='/' className='mx-1'>
            Home
          </Link>{' '}
          |{' '}
          <Link className='mx-1' to='/about'>
            About Us
          </Link>
          |{' '}
          <Link className='mx-1' to='/contact'>
            Contact-Us
          </Link>
        </p>

        <div className='mt-0'>
          <Link to='/patientsform'>
            <span className='ml-3'>
              <FaLinkedin />
            </span>
          </Link>
          <Link to='/patientsform2'>
            <span className='ml-3'>
              <FaTwitter />
            </span>
          </Link>
          <Link to='/'>
            <span className='ml-3'>
              <FaFacebookSquare />
            </span>
          </Link>
          <Link to='/'>
            <span className='ml-3'>
              <FaWhatsapp />
            </span>
          </Link>
          <Link to='/'>
            <span className='ml-3'>
              <FaInstagram />
            </span>
          </Link>
        </div>

        <p className='m-0'>
          Copyright &copy; 2020{' '}
          <Link to='/' className='text-muted'>
            Benjamin (Migrant Solutions).
          </Link>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
