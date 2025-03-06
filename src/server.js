import "dotenv/config.js";
import express from "express";

import configViewEngine from "./config/viewEngine.js";
import webRouter from "./routes/web.js";

// import connection from "./config/db.js";

// // A simple SELECT query
// try {
//   const [results, fields] = await connection.query(
//     'SELECT * FROM Users WHERE name = "hoidanit"'
//   );

//   console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra meta data about results, if available
// } catch (err) {
//   console.log(err);
// }

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST_NAME || "localhost";

configViewEngine(app);

app.use("/", webRouter);

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
