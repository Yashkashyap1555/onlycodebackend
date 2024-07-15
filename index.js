const bodyParser = require("body-parser"); //imp
const express = require("express"); //imp first line
const app = express(); //imp second line instance
const port = 3001;
const mongoose = require("mongoose"); //imp
const cors = require("cors") // this is require to join the backend server

const router = require("./route/commonRoute");

mongoose.connect("mongodb://127.0.0.1:27017/backendfile");
const connection = mongoose.connection;
connection.once("open", (req, res) => {
  console.log("mongo db connected");
});

app.use(cors())
app.use(bodyParser.json()); //imp

app.use("/", router); // then this line to set the path or route
console.log("765678")

app.listen(port, (req, res) => {
  console.log(`server is connected ${port}`);
});
