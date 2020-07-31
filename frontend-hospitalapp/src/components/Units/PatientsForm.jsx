import React, { useState } from 'react';
import Page from '../Page';
import Axios from 'axios';

function PatientsForm() {
  
  const [patientname, setPatientname] = useState();
  const [hospnum, setHospnum] = useState();
  const [sex, setSex] = useState();
  const [dob, setDob] = useState();
  const [religion, setReligion] = useState();
  const [bloodgrp, setBloodgrp] = useState();
  const [bloodgeno, setBloodgeno] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [AddOfPatient, setAddOfPatient] = useState();
  const [stateOfOrigin, setStateOfOrigin] = useState();
  const [locaGovernmentArea, setLocaGovernmentArea] = useState();
  const [nextOfKin, setNextOfKin] = useState();
  const [phoneNumOfnextOfKin, setPhoneNumOfnextOfKin] = useState();
  const [relationshipNextOfKin, setRelationshipNextOfKin] = useState();
  const [AddOfnextOfKin, setAddOfnextOfKin] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:8080/api/patients/create', {
        patientname,
        hospnum,
        sex,
        dob,
        religion,
        bloodgrp,
        bloodgeno,
        phoneNum,
        AddOfPatient,
        stateOfOrigin,
        locaGovernmentArea,
        nextOfKin,
        phoneNumOfnextOfKin,
        relationshipNextOfKin,
        AddOfnextOfKin,
      });
      console.log("Patient's record was posted successively...");
    } catch (e) {
      console.log('There was an error...');
    }
  }

  return (
    <Page title="Patient's Bio-data">
      <div className='container patientForm'>
        <div className='row'>
          <div className='col-md-12 mt-md-5'>
            <form onSubmit={handleSubmit}>
              <h2 className='text-primary text-center'>
                <strong>PATIENT'S BIO-DATA:</strong>
              </h2>

              <div className='form-group'>
                <label htmlFor='patientname' className='text-muted mb-1'>
                  <small>Name of Patient</small>
                </label>
                <input
                  id='patientname'
                  name='patientname'
                  className='form-control'
                  type='text'
                  placeholder='Name of Patient'
                  autoComplete='off'
                  onChange={e => setPatientname(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='hospnum' className='text-muted mb-1'>
                  <small>Hospital Number</small>
                </label>
                <input
                  id='hospnum'
                  name='hospnum'
                  className='form-control'
                  type='number'
                  placeholder='Enter Hospital Number'
                  autoComplete='off'
                  onChange={e => setHospnum(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='sex' className='text-muted mb-1'>
                  <small>Sex</small>
                </label>
                <select
                  className='text-muted ml-3'
                  name='sex'
                  id='sex'
                  onChange={e => setSex(e.target.value)}
                >
                  <option value='Select'>Select</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Others'>Others</option>
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor='dob' className='text-muted mb-1'>
                  <small>Date of Birth</small>
                </label>
                <input
                  id='dob'
                  name='dob'
                  className='form-control'
                  type='date'
                  placeholder='Pick a Date of Birth'
                  autoComplete='off'
                  onChange={e => setDob(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='religion' className='text-muted mb-1'>
                  <small>Religion</small>
                </label>
                <select
                  className='text-muted ml-3'
                  name='religion'
                  id='religion'
                  onChange={e => setReligion(e.target.value)}
                >
                  <option value='Select'>Select</option>
                  <option value='religion'>Christainity</option>
                  <option value='religion'>Islam</option>
                  <option value='religion'>Others</option>
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor='bloodgrp' className='text-muted mb-1'>
                  <small>Blood Group</small>
                </label>
                <select
                  className='text-muted ml-3'
                  name='bloodgrp'
                  id='bloodgrp'
                  onChange={e => setBloodgrp(e.target.value)}
                >
                  <option value='Select'>Select</option>
                  <option value='Group A'>A</option>
                  <option value='Group B'>B</option>
                  <option value='Group AB'>AB</option>
                  <option value='Group O'>O</option>
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor='bloodgeno' className='text-muted mb-1'>
                  <small>Blood Genotype</small>
                </label>
                <select
                  className='text-muted ml-3'
                  name='bloodgeno'
                  id='bloodgeno'
                  onChange={e => setBloodgeno(e.target.value)}
                >
                  <option value='Select'>Select</option>
                  <option value='Genotype AA'>AA</option>
                  <option value='Genotype AO'>AB</option>
                  <option value='Genotype BB'>BB</option>
                  <option value='Genotype BO'>BO</option>
                  <option value='Genotype AB'>AB</option>
                  <option value='Genotype OO'>OO</option>
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor='phoneNum' className='text-muted mb-1'>
                  <small>Phone Number</small>
                </label>
                <input
                  id='phoneNum'
                  name='phoneNum'
                  className='form-control'
                  type='number'
                  placeholder='Enter Phone Number'
                  autoComplete='off'
                  onChange={e => setPhoneNum(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='AddOfPatient' className='text-muted mb-1'>
                  <small>Addrress of Patient</small>
                </label>
                <input
                  id='AddOfPatient'
                  name='AddOfPatient'
                  className='form-control'
                  type='text'
                  placeholder='Enter Address of Patient'
                  onChange={e => setAddOfPatient(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='stateOfOrigin' className='text-muted mb-1'>
                  <small>State of Origin</small>
                </label>
                <select
                  className='text-muted ml-3'
                  name='country'
                  id='country'
                  onChange={e => setStateOfOrigin(e.target.value)}
                >
                  <option value='Select'>Select</option>
                  <option value='Abia'>Abia</option>
                  <option value='Adamawa'>Adamawa</option>
                  <option value='Akwa-Ibom'>Akwa-Ibom</option>
                  <option value='Anambra'>Anambra</option>
                  <option value='Bauchi'>Bauchi</option>
                  <option value='Bayelsa'>Bayelsa</option>
                  <option value='Benue'>Benue</option>
                  <option value='Borno'>Borno</option>
                  <option value='Cross-river'>Cross-river</option>
                  <option value='Delta'>Delta</option>
                  <option value='Ebonyi'>Ebonyi</option>
                  <option value='Edo'>Edo</option>
                  <option value='Ekiti'>Ekiti</option>
                  <option value='Enugu'>Enugu</option>
                  <option value='Gombe'>Gombe</option>
                  <option value='Imo'>Imo</option>
                  <option value='Jigawa'>Jigawa</option>
                  <option value='Kaduna'>Kaduna</option>
                  <option value='Kano'>Kano</option>
                  <option value='Katsina'>Katsina</option>
                  <option value='Kebbi'>Kebbi</option>
                  <option value='Kogi'>Kogi</option>
                  <option value='Kwara'>Kwara</option>
                  <option value='Lagos'>Lagos</option>
                  <option value='Nassarawa'>Nassarawa</option>
                  <option value='Niger'>Niger</option>
                  <option value='Ogun'>Ogun</option>
                  <option value='Ondo'>Ondo</option>
                  <option value='Osun'>Osun</option>
                  <option value='Oyo'>Oyo</option>
                  <option value='Plateau'>Plateau</option>
                  <option value='Rivers'>Rivers</option>
                  <option value='Sokoto'>Sokoto</option>
                  <option value='Taraba'>Taraba</option>
                  <option value='Yobe'>Yobe</option>
                  <option value='Zamfara'>Zamfara</option>
                  <option value='FCT'>FCT</option>
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor='locaGovernmentArea' className='text-muted mb-1'>
                  <small>Enter Local Government Area</small>
                </label>
                <input
                  id='locaGovernmentArea'
                  name='locaGovernmentArea'
                  className='form-control mb-5'
                  type='text'
                  placeholder='Enter Name of Local Government Area'
                  onChange={e => setLocaGovernmentArea(e.target.value)}
                />
              </div>

              <hr />

              <div className='form-group'>
                <label htmlFor='nextOfKin' className='text-muted mb-1 mt-5'>
                  <small>Next of Kin</small>
                </label>
                <input
                  id='nextOfKin'
                  name='nextOfKin'
                  className='form-control'
                  type='text'
                  placeholder='Enter Name of Next of Kin'
                  onChange={e => setNextOfKin(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label
                  htmlFor='phoneNumOfnextOfKin'
                  className='text-muted mb-1'
                >
                  <small>Phone Number of Next of Kin</small>
                </label>
                <input
                  id='phoneNumOfnextOfKin'
                  name='phoneNumOfnextOfKin'
                  className='form-control'
                  type='number'
                  placeholder='Enter Phone Number of Next of Kin'
                  onChange={e => setPhoneNumOfnextOfKin(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label
                  htmlFor='relationshipNextOfKin'
                  className='text-muted mb-1'
                >
                  <small>Relationship With Next of Kin</small>
                </label>
                <select
                  className='text-muted ml-3'
                  name='relationshipNextOfKin'
                  id='relationshipNextOfKin'
                  onChange={e => setRelationshipNextOfKin(e.target.value)}
                >
                  <option value='Select'>Select</option>
                  <option value='Brother'>Brother</option>
                  <option value='Sister'>Sister</option>
                  <option value='Wife'>Wife</option>
                  <option value='Husband'>Husband</option>
                  <option value='Cousin'>Cousin</option>
                  <option value='Nephew'>Nephew</option>
                  <option value='Niece'>Niece</option>
                  <option value='Uncle'>Uncle</option>
                  <option value='Aunt'>Aunt</option>
                  <option value='Step-Brother'>Step-Brother</option>
                  <option value='Step-Sister'>Step-Sister</option>
                  <option value='Step-Father'>Step-Father</option>
                  <option value='Step-Mother'>Step-Mother</option>
                  <option value='Pastor'>Pastor</option>
                  <option value='Imam'>Imam</option>
                  <option value='Friend'>Friend</option>
                  <option value='Colleague'>Colleague</option>
                  <option value='Fiance'>Fiance</option>
                  <option value='Father'>Father</option>
                  <option value='Mother'>Mother</option>
                  <option value='Others'>Others</option>
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor='AddOfnextOfKin' className='text-muted mb-1'>
                  <small>Addrress of Next of Kin</small>
                </label>
                <input
                  id='AddOfnextOfKin'
                  name='AddOfnextOfKin'
                  className='form-control mb-5'
                  type='text'
                  placeholder='Enter Address of Next of Kin'
                  onChange={e => setAddOfnextOfKin(e.target.value)}
                />
              </div>

              <button
                type='submit'
                className='py-3 my-5 btn btn-lg btn-success btn-block'
              >
                <strong>Register</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default PatientsForm;
