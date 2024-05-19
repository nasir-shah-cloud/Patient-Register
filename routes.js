const express = require('express');
const router = express.Router();
const { registerPatient, getPsychiatristsByHospital } = require('./controller');

// New patient registration route
router.post('/register', registerPatient);

// Fetch psychiatrists and patient details for a hospital
router.get('/psychiatrists/:hospitalId', getPsychiatristsByHospital);

module.exports = router;
