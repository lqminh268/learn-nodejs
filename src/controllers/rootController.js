import connection from "../config/db.js";

const getRootPath = async (req, res) => {
  // Using placeholders - note: can use normalcase for query string
  try {
    const [results] = await connection.query(
      "select * from Users where name = ? and city = ?",
      ["IGotThePower", "LongAn"]
    );

    res.send(JSON.stringify(results));
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};

const getAnotherPath = (req, res) => {
  res.send("another page");
};

const getProfilePath = (req, res) => {
  res.render("sample.ejs");
};

export { getRootPath, getAnotherPath, getProfilePath };
