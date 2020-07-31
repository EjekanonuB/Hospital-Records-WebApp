import React from 'react';
import { Link } from 'react-router-dom';
import img01 from '../images/img01.jpg';
import img03 from '../images/img03.jpg';
import img04 from '../images/img04.jpg';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


function Carousel() {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      data-ride='carousel'
    >
      <ol className='carousel-indicators'>
        <li
          data-target='#carouselExampleIndicators'
          data-slide-to='0'
          className='active'
        ></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
      </ol>
      <div class='carousel-inner'>
        <div className='carousel-item active'>
          <img src={img01} className='d-block w-100'  alt='...' />
        </div>
        <div className='carousel-item active'>
          <img src={img03} className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item active'>
          <img src={img04} className='d-block w-100' alt='...' />
        </div>
      </div>
      <Link
        className='carousel-control-prev'
        to='#carouselExampleIndicators'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </Link>
      <Link
        className='carousel-control-next'
        to='#carouselExampleIndicators'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </Link>
    </div>
  );
}

export default Carousel;
