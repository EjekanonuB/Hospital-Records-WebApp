const express = require('express');
const router = express.Router();
const PatientsData = require('../models/patientsModel');

router.post('/create', (req, res) => {
  const newPatientData = new PatientsData({
    patientname: req.body.patientname,
    hospnum: req.body.hospnum,
    sex: req.body.sex,
    dob: req.body.dob,
    religion: req.body.religion,
    bloodgrp: req.body.bloodgrp,
    bloodgeno: req.body.bloodgeno,
    phoneNum: req.body.phoneNum,
    AddOfPatient: req.body.AddOfPatient,
    stateOfOrigin: req.body.stateOfOrigin,
    locaGovernmentArea: req.body.locaGovernmentArea,
    nextOfKin: req.body.nextOfKin,
    phoneNumOfnextOfKin: req.body.phoneNumOfnextOfKin,
    relationshipNextOfKin: req.body.relationshipNextOfKin,
    AddOfnextOfKin: req.body.AddOfnextOfKin,
  });
  newPatientData
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});

module.exports = router;
