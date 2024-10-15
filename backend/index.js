const express = require("express");
const cors = require("cors");
const courseRoutes = require("./Routes/Courses");
const userRoutes = require("./Routes/Users")



const mongoose = require("mongoose");
const User = require("./Models/database/User");
const mongoUri = "mongodb://127.0.0.1:27017/dances";
const app = express();
const PORT = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use("/api", courseRoutes);
app.use("/api", userRoutes);


mongoose.connect(mongoUri);

app.listen(PORT, function () {
    User.find()
  console.log("listening on port 3000!");
});
