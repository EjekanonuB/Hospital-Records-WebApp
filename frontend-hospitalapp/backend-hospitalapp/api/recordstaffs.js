const express = require('express');
const router = express.Router();
const recordstaffsData = require('../models/recordstaffsModel');
const { recordstaffValidation } = require('../recordstaffValidation');
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {
  const { error } = recordstaffValidation(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  const regRecordstaff = await recordstaffsData.findOne({
    username: req.body.username,
  });
  if (error) {
    res.status(400).send('Username does not exist...');
  }

  const correctPassword = await bcrypt.compare(
    req.body.password,
    regRecordstaff.password
  );
  if (!correctPassword) {
    res.status(400).send('Password does not exist...');
  }

  return res.send('Logged In Successfully...');
});

module.exports = router;
