const express = require('express');
const app = express();
const patientsUrls = require('./api/patients');
const clinicalstaffsUrls = require('./api/clinicalstaffs');
const recordstaffsUrls = require('./api/recordstaffs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log('Database is connected...');
  }
);

app.use(express.json());
app.use(cors());
app.use('/api/patients', patientsUrls);
app.use('/api/clinicalstaffs', clinicalstaffsUrls);
app.use('/api/recordstaffs', recordstaffsUrls);

app.listen(8080, () => {
  console.log('Server is up and running at port 8080...');
});
