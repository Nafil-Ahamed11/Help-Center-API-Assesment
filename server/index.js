require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cardRoutes = require('./routes/routes.js')

const app = express();
const PORT = process.env.PORT || 7000;


app.use(cors());
app.use(express.json()); 


const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/api', cardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
