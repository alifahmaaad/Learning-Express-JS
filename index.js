const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./database/db");
const app = express();
const port = process.env.APPPORT;
app.use(express.json());
app.listen(port, () => {
  console.log(port);
});
