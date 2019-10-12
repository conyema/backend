// MONGO CONNECTION = mongodb+srv://owiwi:<password>@cluster0-7cerh.mongodb.net/admin?retryWrites=true&w=majority
// USER (owi) PW = b4CG56I70A68QaoP

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');

const app = express();

mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv://owiwi:b4CG56I70A68QaoP@cluster0-7cerh.mongodb.net/uba?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch(error => {
    console.log(`${error}:  Failed to connect to MongoDB`);
  });

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', stuffRoutes);

module.exports = app;