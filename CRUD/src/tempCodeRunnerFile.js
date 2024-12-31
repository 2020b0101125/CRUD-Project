import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/db.js";
import errorhandelling from "./middlewares/errorhandelling.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

//routes
app.use("/api", userRoutes);

//errorhandelling
app.use(errorhandelling);

//testing postgres
app.get("/", async (req, res) => {
  const result = await db.query("Select current_database()");
  res.send(`currently we are connected to ${result.rows[0].current_database}`);
});

//server running

app.listen(port, () => {
  console.log(`the server is running at port ${port}`);
});
