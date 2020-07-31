import React from 'react';
import Page from './Page';
import img02 from '../images/img02.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Page title='Home'>
      <div className='jumbotron Home'>
        <h1 className='display-4 text-center text-primary'>
          <strong>Welcome to This Hospital...</strong>
        </h1>
        <p className='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className='my-4' />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <Link className='btn btn-primary btn-lg' to='/about' role='button'>
          Learn more
        </Link>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card' style={{ width: '15rem' }}>
              <img src={img02} className='card-img-top' alt='CMD' />
            </div>
            <div className='card-body'>
              <h5 className='card-title'> Chief Medical Director's Name</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to='#' className='btn btn-primary'>
                Continue
              </Link>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card' style={{ width: '15rem' }}>
              <img src={img02} className='card-img-top' alt='CMD' />
            </div>
            <div className='card-body'>
              <h5 className='card-title'> Chief Medical Director's Name</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to='#' className='btn btn-primary'>
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Home;
