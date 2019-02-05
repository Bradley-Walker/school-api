var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

// Import models
var Student = require('./api/models/studentModel');

// Connect to mongo db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/school', {useNewUrlParser: true});

// Setup request body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Setup routes
var studentRoutes = require('./api/routes/studentRoutes');
studentRoutes(app);

app.listen(port);

console.log('School API available on port ' + port);
