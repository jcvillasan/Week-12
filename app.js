const express = require("express")
const { connectDB } = require("./db");
const studentRouter = require("./routes/student")

const app = express();
app.use(express.json());

connectDB();
app.use("/v2/", studentRouter)

app.listen(3000, () => {
    console.log(`Student API running on port 3000...`);
});

