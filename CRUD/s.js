import express from "express";
//import db from "./src/config/db";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3001;

console.log(process.env.PG_DATABASE);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
