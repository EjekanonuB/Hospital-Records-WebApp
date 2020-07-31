const express = require('express');
const router = express.Router();
const clinicalstaffsData = require('../models/clinicalstaffsModel');
const { clinicalstaffValidation } = require('../clinicalstaffValidation');
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {
  const { error } = clinicalstaffValidation(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  const regClinicalstaff = await clinicalstaffsData.findOne({
    username: req.body.username,
  });
  if (error) {
    res.status(400).send('Username does not exist...');
  }

  const correctPassword = await bcrypt.compare(
    req.body.password,
    regClinicalstaff.password
  );
  if (!correctPassword) {
    res.status(400).send('Password does not exist...');
  }

  return res.send('Logged In Successfully...');
});

module.exports = router;
