const mongoose = require('mongoose');

const patientsSchema = new mongoose.Schema({
  
  patientname: {
    type: String,
    required: true,
  },

  hospnum: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },

  dob: {
    type: String,
    required: true,
  },

  religion: {
    type: String,
    required: true,
  },

  bloodgrp: {
    type: String,
    required: true,
  },

  bloodgeno: {
    type: String,
    required: true,
  },

  phoneNum: {
    type: String,
    required: true,
  },

  AddOfPatient: {
    type: String,
    required: true,
  },

  stateOfOrigin: {
    type: String,
    required: true,
  },

  locaGovernmentArea: {
    type: String,
    required: true,
  },

  nextOfKin: {
    type: String,
    required: true,
  },

  phoneNumOfnextOfKin: {
    type: String,
    required: true,
  },

  relationshipNextOfKin: {
    type: String,
    required: true,
  },

  AddOfnextOfKin: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('patientsdb', patientsSchema);
