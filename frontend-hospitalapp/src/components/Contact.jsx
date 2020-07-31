import React from 'react';
import Page from './Page';
import '../index.css';

function Contact() {
  return (
    <Page title='Contact-Us'>
      <div className='container-fluid contactPage d-none d-sm-block'>
        <div className='row'>
          <div className='col-md-6 mx-auto my-5'>
            <form action=''>
              <div className='form-group mt-4'>
                <label htmlFor='fname' className='text-muted mb-1'>
                  <small>First Name</small>
                </label>
                <input
                  id='fname'
                  name='fname'
                  className='form-control'
                  type='text'
                  placeholder='Enter your First Name'
                  autocomplete='off'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='lname' className='text-muted mb-1'>
                  <small>Last Name</small>
                </label>
                <input
                  id='lname'
                  name='lname'
                  className='form-control'
                  type='text'
                  placeholder='Enter your Last Name'
                  autocomplete='off'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='country' className='text-muted mb-1'>
                  <small>Country</small>
                </label>
                <select className='text-muted ml-3' name='country' id='country'>
                  <option value='Select'>Select</option>
                  <option value='Nigeria'>Nigeria</option>
                  <option value='Ghana'>Ghana</option>
                  <option value='Cameroun'>Cameroun</option>
                  <option value='Uganda'>Uganda</option>
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor='subject' className='text-muted mb-1 d-block'>
                  <small>Subject</small>
                </label>
                <textarea
                  name='subject'
                  id='subject'
                  className='body-content tall-textarea form-control'
                  type='text'
                  placeholder='Write something...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='py-3 mt-4 btn btn-lg btn-success btn-block'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Contact;
