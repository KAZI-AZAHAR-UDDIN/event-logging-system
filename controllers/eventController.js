const EventLog = require('../models/eventLog');
const { calculateHash } = require('../utils/hashUtil');
const { broadcast } = require('../websocket/wsServer');

// Add new event
const addEvent = async (req, res) => {
  try {
    const { eventType, timestamp, sourceAppId, dataPayload } = req.body;

    // Find the latest event
    const lastEvent = await EventLog.findOne().sort({ _id: -1 });
    const prevHash = lastEvent ? lastEvent.hash : '';

    // Calculate current hash
    const newEvent = { eventType, timestamp, sourceAppId, dataPayload, prevHash };
    const hash = calculateHash(newEvent);

    // Save the event log
    const eventLog = new EventLog({ ...newEvent, hash });
    await eventLog.save();

    // Broadcast the new event to WebSocket clients
    broadcast({ type: 'NEW_EVENT', data: eventLog });

    res.status(201).json(eventLog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to log event' });
  }
};

// Get events with filters and pagination
const getEvents = async (req, res) => {
  try {
    const { startTime, endTime, eventType, sourceAppId, page = 1, limit = 10 } = req.query;
    const query = {};

    // Add filters if provided
    if (startTime && endTime) query.timestamp = { $gte: new Date(startTime), $lte: new Date(endTime) };
    if (eventType) query.eventType = eventType;
    if (sourceAppId) query.sourceAppId = sourceAppId;

    // Fetch events with pagination
    const events = await EventLog.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ timestamp: -1 });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve events' });
  }
};

module.exports = { addEvent, getEvents };
