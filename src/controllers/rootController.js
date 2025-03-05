const getRootPath = (req, res) => {
  res.send("home page");
};

const getAnotherPath = (req, res) => {
  res.send("another page");
};

const getProfilePath = (req, res) => {
  res.render("sample.ejs");
};

export { getRootPath, getAnotherPath, getProfilePath };
