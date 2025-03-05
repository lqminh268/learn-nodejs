import express from "express";
import dotenv from "dotenv";

import configViewEngine from "./config/viewEngine.js";
import webRouter from "./routes/web.js";

import mysql from "mysql2/promise";

dotenv.config();

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// A simple SELECT query
try {
    const [results, fields] = await connection.query(
      'SELECT * FROM Users WHERE name = "hoidanit"'
    );
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
  
  // Using placeholders - note: can use normalcase for query string
  try {
    const [results] = await connection.query(
      'select * from Users where name = ? and city = ?',
      ['IGotThePower', 'LongAn']
    );
  
    console.log(results);
  } catch (err) {
    console.log(err);
  }

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST_NAME || "localhost";

configViewEngine(app);

app.use("/", webRouter);

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
