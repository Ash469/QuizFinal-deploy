const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const leaderboardRoutes = require('./routes/leaderboard');
const mongoose = require('mongoose');
const URL = process.env.MONGODB_URL;
require('dotenv').config();

const app = express();
app.use(express.json()); 
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));


// Routes
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/leaderboard', leaderboardRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port 5000');
})