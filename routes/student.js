const router = require("express").Router();
const studentsController = require("../controllers/studentController");

router.route("/students")
    .get(studentsController.getStudents)
    .post(studentsController.addStudent);

router.route("/students/:id")
    .get(studentsController.getStudentByID)
    .put(studentsController.updateStudent)
    .delete(studentsController.deleteStudent);

module.exports = router;

