const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
    dialect:"sqlite",
    host: "./SchoolDB.db"
})

const connectDB = async () => {
    sequelize.sync();
    await sequelize.authenticate();
    console.log("connected to DB");
}

module.exports = { sequelize, connectDB };