const Students = require("../models/students");

// get all student
exports.getStudents = async (req, res) => {
    const students = await Students.findAndCountAll();
    res.json({ result: students});
}

// add a student record
exports.addStudent = async (req, res) => {
    const newStudent = await Students.create(req.body);
    res.status(201).json ({ 
        message: "Student added successfully",
        result: newStudent,
    });
}

exports.getStudentById = async (req, res) => {
    const student = await Students.findByPk(req.params.id);
    res.json({
        message: `Student with id ${req.params.id} is fetched.`,
        result: student,
    });
}

exports.updateStudent = async (req, res) => {
    const IsUpdated = await  Students.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    const updatedStudent = Students.findByPk(req.params.id);
    req.status(202).json ({
        message: `Student with id ${req.params.id} is updated.`,
        isUpdated: Boolean(isUpdated[0]),
        result: updatedStudent
    })
}

exports.deleteStudent = async (req, res) => {
    const isDeleted = await Students.destroy ({
        where: {
            id: req.params.id
        }
    });
    if (!isDeleted) throw new Error("Student not found");

    res.status(204).json({
        message: `Student with id ${req.params.id} is deleted`,
        result: Boolean(isDeleted)
    }).send("deleted!");
}