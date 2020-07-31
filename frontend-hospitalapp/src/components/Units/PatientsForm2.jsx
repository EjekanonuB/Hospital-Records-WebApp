import React, { useState } from 'react';
import Page from '../Page';
import Axios from 'axios';

function PatientsForm2() {
  const [presentingComplains, setPresentingComplains] = useState();
  const [
    historypresentingComplains,
    setHistorypresentingComplains,
  ] = useState();
  const [pastMedicalhx, setPastMedicalhx] = useState();
  const [immunizationHx, setImmunizationHx] = useState();
  const [familySocialHx, setFamilySocialHx] = useState();
  const [labFindings, setLabFindings] = useState();
  const [temp, setTemp] = useState();
  const [bp, setBp] = useState();
  const [pulseRate, setPulseRate] = useState();
  const [respRate, setRespRate] = useState();
  const [heartRate, setHeartRate] = useState();
  const [radioFindings, setRadioFindings] = useState();
  const [diagnosis, setDiagnosis] = useState();
  const [rxAdministered, setRxAdministered] = useState();
  const [drugChart, setDrugChart] = useState();
  const [clinicianName, setClinicianName] = useState();

 async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:8080/api/patients/create', {
        presentingComplains,
        historypresentingComplains,
        pastMedicalhx,
        immunizationHx,
        familySocialHx,
        labFindings,
        temp,
        bp,
        pulseRate,
        respRate,
        heartRate,
        radioFindings,
        diagnosis,
        rxAdministered,
        drugChart,
        clinicianName,
      });
      console.log("Patient's record was posted successively...");
    } catch (e) {
      console.log('There was an error...');
    }
  }

  return (
    <Page title="Patient's Record">
      <div className='container patientForm2'>
        <div className='row'>
          <div className='col-md-12'>
            <form onSubmit={handleSubmit}>
              <h2 className='text-primary text-center mb-5'>
                <strong>PATIENT'S MEDICAL RECORD:</strong>
              </h2>

              <div className='form-group'>
                <label
                  for='presentingComplains'
                  className='text-muted mb-1 d-block'
                >
                  <small>
                    <strong>Presenting Complaints</strong>
                  </small>
                </label>
                <textarea
                  name='presentingComplains'
                  id='presentingComplains'
                  className='body-content text-muted tall-textarea form-control'
                  type='text'
                  placeholder="Note area for Patient's Presenting Complaints"
                  onChange={e => setPresentingComplains(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label
                  for='historypresentingComplains'
                  className='text-muted mb-1 d-block'
                >
                  <small>History of Presenting Complaints</small>
                </label>
                <textarea
                  name='historypresentingComplains'
                  id='historypresentingComplains'
                  className='body-content text-muted tall-textarea form-control'
                  type='text'
                  placeholder="Note area for Patient's History of Presenting Complaints"
                  onChange={e => setHistorypresentingComplains(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label for='pastMedicalhx' className='text-muted mb-1 d-block'>
                  <small>Past Medical History</small>
                </label>
                <textarea
                  name='pastMedicalhx'
                  id='pastMedicalhx'
                  className='body-content text-muted tall-textarea form-control'
                  type='text'
                  placeholder="Note area for Patient's Past Medical History"
                  onChange={e => setPastMedicalhx(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label for='immunizationHx' className='text-muted mb-1 d-block'>
                  <small>Immunization History</small>
                </label>
                <textarea
                  name='immunizationHx'
                  id='immunizationHx'
                  className='body-content  text-muted tall-textarea form-control'
                  type='text'
                  placeholder="Note area for Patient's Immunization History"
                  onChange={e => setImmunizationHx(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label for='familySocialHx' className='text-muted mb-1 d-block'>
                  <small>Family and Social History</small>
                </label>
                <textarea
                  name='familySocialHx'
                  id='familySocialHx'
                  className='body-content text-muted tall-textarea form-control mb-5'
                  type='text'
                  placeholder="Note area for Patient's Family and Social History"
                  onChange={e => setFamilySocialHx(e.target.value)}
                ></textarea>
              </div>

              <hr />

              <div className='form-group'>
                <label for='labFindings' className='text-muted mt-5 d-block'>
                  <small>
                    <strong>Labouratory Findings</strong>
                  </small>
                </label>
                <textarea
                  name='labFindings'
                  id='labFindings'
                  className='body-content text-muted tall-textarea form-control'
                  type='text'
                  placeholder="Note area for Patient's Labouratory Findings"
                  onChange={e => setLabFindings(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label for='temp' className='text-muted mb-1 d-block'>
                  <small>Temperature</small>
                </label>
                <textarea
                  name='temp'
                  id='temp'
                  className='body-content text-muted tall-textarea form-control'
                  type='number'
                  placeholder="Note area for Patient's Temperature recordings"
                  onChange={e => setTemp(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label for='bp' className='text-muted mb-1 d-block'>
                  <small>Blood Pressure Recording</small>
                </label>
                <textarea
                  name='bp'
                  id='bp'
                  className='body-content text-muted tall-textarea form-control'
                  type='number'
                  placeholder="Note area for Patient's Blood Pressure Recording"
                  onChange={e => setBp(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label for='pulseRate' className='text-muted mb-1 d-block'>
                  <small>Pulse Rate Recording</small>
                </label>
                <textarea
                  name='pulseRate'
                  id='pulseRate'
                  className='body-content text-muted tall-textarea form-control'
                  type='number'
                  placeholder="Note area for Patient's Pulse Rate Recording"
                  onChange={e => setPulseRate(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label for='respRate' className='text-muted mb-1 d-block'>
                  <small>Respiratory Rate Recording</small>
                </label>
                <textarea
                  name='respRate'
                  id='respRate'
                  className='body-content text-muted tall-textarea form-control'
                  type='number'
                  placeholder="Note area for Patient's Respiratory Rate Recording"
                  onChange={e => setRespRate(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label for='heartRate' className='text-muted mb-1 d-block'>
                  <small>Heart Rate Recording</small>
                </label>
                <textarea
                  name='heartRate'
                  id='heartRate'
                  className='body-content text-muted tall-textarea form-control'
                  type='number'
                  placeholder="Note area for Patient's Heart Rate Recording"
                  onChange={e => setHeartRate(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label for='radioFindings' className='text-muted mb-1 d-block'>
                  <small>Radiological Findings Recording</small>
                </label>
                <textarea
                  name='radioFindings'
                  id='radioFindings'
                  className='body-content text-muted tall-textarea form-control mb-5'
                  type='text'
                  placeholder="Note area for Patient's Radiological Findings Recording"
                  onChange={e => setRadioFindings(e.target.value)}
                ></textarea>
              </div>

              <hr />

              <div className='form-group'>
                <label for='diagnosis' className='text-muted mt-5 d-block'>
                  <small>
                    <strong>Diagnosis</strong>
                  </small>
                </label>
                <textarea
                  name='diagnosis'
                  id='diagnosis'
                  className='body-content text-muted tall-textarea form-control'
                  type='text'
                  placeholder="Note area for Patient's Diagnosis"
                  onChange={e => setDiagnosis(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label for='rxAdministered' className='text-muted mb-1 d-block'>
                  <small>Treatment Administered</small>
                </label>
                <textarea
                  name='rxAdministered'
                  id='rxAdministered'
                  className='body-content text-muted tall-textarea form-control'
                  type='text'
                  placeholder="Note area for Patient's Treatment Administered"
                  onChange={e => setRxAdministered(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label for='drugChart' className='text-muted mb-1 d-block'>
                  <small>Drug Chart</small>
                </label>
                <textarea
                  name='drugChart'
                  id='drugChart'
                  className='body-content text-muted tall-textarea form-control'
                  type='text'
                  placeholder="Note area for Patient's Drug Chart Recording"
                  onChange={e => setDrugChart(e.target.value)}
                ></textarea>
              </div>

              <div className='form-group'>
                <label htmlFor='clinicianName' className='text-muted mb-4'>
                  <small>Name of Clinician</small>
                </label>
                <input
                  id='clinicianName'
                  name='clinicianName'
                  className='form-control'
                  type='text'
                  placeholder='clinicianName'
                  autoComplete='off'
                  onChange={e => setClinicianName(e.target.value)}
                />
              </div>

              <button
                type='submit'
                className='py-3 my-5 btn btn-lg btn-success btn-block'
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

export default PatientsForm2;
