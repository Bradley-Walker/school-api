'use strict';

var mongoose = require('mongoose'),
  Student = mongoose.model('Students');

exports.getAll = (req, res) => {
  Student.find({}, (err, students) => {
      if(err)
        res.send(err);
      res.json({it: "worked"});
      //res.json(students);
    }
  );
};

exports.getById = (req, res) => {
  Student.findById(req.params.studentId, (err, student) => {
    if(err)
      res.send(err);
    res.json(student);
  });
};

exports.create = (req, res) => {
  var newStudent = new Student(req.body);
  newStudent.save((err, student) => {
    if(err)
      res.send(err);
    res.json(student);
  });
};

exports.update = (req, res) => {
  Student.findOneAndUpdate({_id: req.params.studentId}, req.body, {new: true}, (err, student) => {
    if(err)
      res.send(err);
    res.json(student);
  });
};

exports.delete = (req, res) => {
  Student.deleteOne({_id: req.params.studentId}, (err, student) => {
    if(err)
      res.send(err);
    res.json({message: 'Student deleted'});
  });
};
