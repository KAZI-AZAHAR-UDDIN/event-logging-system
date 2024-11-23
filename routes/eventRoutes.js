const express = require('express');
const { addEvent, getEvents } = require('../controllers/eventController');

const router = express.Router();

// POST: Add a new event
router.post('/', addEvent);

// GET: Query events with filters and pagination
router.get('/', getEvents);

module.exports = router;
