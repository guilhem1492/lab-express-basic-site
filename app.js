const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
// app.set("views", __dirname + "/pages")

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    title: "Main page",
    style: ["style.css"],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
    style: ["style.css"],
  });
});

app.get("/works", (req, res) => {
  res.render("works", {
    title: "works page",
    style: ["style.css"],
  });
});
app.get("/gallery", (req, res) => {
  res.render("gallery", {
    title: "gallery page",
    style: ["style.css"],
  });
});

app.listen(3000, () => console.log(`Server 🏃‍♂️ on http://localhost:3000`));
