import db from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();
const createUserTable = () => {
  const queryText = `

    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    user_name VARCHAR(70) NOT NULL,
    user_designation_id INTEGER ,
    user_role varchar(70) NOT NULL,
    user_contact VARCHAR(30),
    user_email VARCHAR(70) UNIQUE,
    user_status BOOLEAN DEFAULT TRUE,
    user_password varchar(20) DEFAULT ${process.env.GENRAL_PASSWORD},

  );
  `;

  db.query(queryText)
    .then(() => {
      console.log(`user table created if not exists`);
    })
    .catch((err) => {
      console.error(`error in creating user table: ${err}`);
    });
};

export default createUserTable;
