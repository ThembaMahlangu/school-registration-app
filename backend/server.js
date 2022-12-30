const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const homeworkRoutes = require('./routes/homework');
const meetingRoutes = require('./routes/meeting');
const complainRoutes = require('./routes/complain');
const feedbackRoutes = require('./routes/feedback');

// Set the strictQuery option to false to suppress the deprecation warning
mongoose.set('strictQuery', false);

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://dummybasejhb:Themba12345678@cluster0.s23vpex.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

// Create the Express app
const app = express();

// Use body-parser to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the routes at specific paths
app.use('/api/homework', homeworkRoutes);
app.use('/api/meeting', meetingRoutes);
app.use('/api/complain', complainRoutes);
app.use('/api/feedback', feedbackRoutes);

// Start the server
app.listen(8000, () => {
  console.log('\x1b[36m%s\x1b[0m', 'Connected to MongoDB Database');
  console.log('Server listening on port 8000');
});