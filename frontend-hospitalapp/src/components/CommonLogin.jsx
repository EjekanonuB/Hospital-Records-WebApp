import React from 'react';
import Page from './Page';

function CommonLogin() {
  return (
    <Page title='Login' id='commonLogin'>
      <div className='container commonLogin'>
        <div className='row'>
          <div className='col-md-12 text-muted'>
            <div className='input-group my-1 mx-auto'>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text'
                  id='inputGroup-sizing-default'
                >
                  Record Staff's
                </span>
              </div>
              <input
                type='text'
                class='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                placeholder='Enter your Name'
              />
              <input
                type='text'
                class='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                placeholder='Enter your Password'
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-outline-success text-light bg-success'
                  type='button'
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-muted'>
            <div className='input-group mt-5'>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text'
                  id='inputGroup-sizing-default'
                >
                  Clinician's
                </span>
              </div>
              <input
                type='text'
                class='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                placeholder='Enter your Name'
              />
              <input
                type='text'
                class='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                placeholder='Enter your Password'
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-outline-success text-light bg-success'
                  type='button'
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default CommonLogin;
