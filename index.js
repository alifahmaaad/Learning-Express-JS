import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import db from "./database/db.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
// import users from "./model/userModel.js";
try {
  await db.authenticate();
  console.log("database connected...");
  // await db.sync();
} catch (error) {
  console.log(error);
}
// const db = require("./database/db");
const app = express();
const port = process.env.APPPORT;

app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(cors());
app.listen(port, () => {
  console.log(port);
});
