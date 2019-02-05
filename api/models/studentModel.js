'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter first name'
  },
  lastName: {
    type: String,
    required: 'Enter last name'
  },
  year: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    required: 'Enter year number'
  }
});

module.exports = mongoose.model('Students', StudentSchema);
