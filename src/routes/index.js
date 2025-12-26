const express = require('express');

const { getHome, getAbout, getContact, getTime } = require('../controllers/homeController');
const { postEcho } = require('../controllers/echoController');
const { postContact } = require('../controllers/contactController');

const router = express.Router();

// Home route: GET /api/
router.get('/', getHome);

// About route: GET /api/about
router.get('/about', getAbout);

// Contact route: GET /api/contact
router.get('/contact', getContact);

// Dynamic data: GET /api/time
router.get('/time', getTime);

// JSON echo: POST /api/echo
router.post('/echo', postEcho);

// JSON with simple validation: POST /api/contact
router.post('/contact', postContact);

module.exports = router;
