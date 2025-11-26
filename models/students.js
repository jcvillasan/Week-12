const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Student = sequelize.define("students", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    first_name:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    last_name:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    hometown:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    favorite_ulam:{
        type: DataTypes.TEXT,
        allowNull: true,
    }
});

module.exports = Student;