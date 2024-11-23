const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
require('dotenv').config();

const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());


// Connect to MongoDB
connectDB();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
// Import routes
const eventRoutes = require('./routes/eventRoutes');
// Default route to serve the HTML dashboard

  
app.use('/api/events', eventRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
