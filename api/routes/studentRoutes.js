'use strict';

module.exports = function(app) {
  var students = require('../controllers/studentController');

  app.route('/students')
    .get(students.getAll)
    .post(students.create);

  app.route('/students/:studentId')
    .get(students.getById)
    .put(students.update)
    .delete(students.delete);
};
