require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("Form");
});

app.post("/clam-certificate", (req, res) => {
  const { name, email, course } = req.body;
  res.render("certificate", { name, email, course });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`The server is started at http://localhost:${PORT}`);
});
