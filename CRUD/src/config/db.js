import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Client } = pg;
// console.log("DB_USER:", process.env.DB_USER); // Should print 'postgres'
// console.log("DB_HOST:", process.env.DB_HOST); // Should print 'localhost'
// console.log("DB_DATABASE:", process.env.DB_DATABASE); // Should print 'postgres'
// console.log("DB_PASSWORD:", process.env.DB_PASSWORD); // Should print 'admin'
// console.log("DB_PORT:", process.env.DB_PORT); // Should print '5432'

const db = new Client({
  user: "postgres" /*process.env.PG_USER*/,
  host: "localhost" /*process.env.PG_HOST*/,
  database: "postgres" /*process.env.PG_DATABASE*/,
  password: "admin" /*process.env.PG_PASSWORD*/,
  port: "5432" /*process.env.PG_PORT*/,
});
//console.log(process.env.PG_DATABASE);
db.connect()
  .then(() => {
    console.log("Connection established with the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err.stack);
  });

export default db;
