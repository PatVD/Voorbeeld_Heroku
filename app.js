"use strict";
const express = require("express");
const app = express();

const fs = require("fs");

const path = require("path");

const port = 5000;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

const mainPath = path.dirname(process.mainModule.filename);

app.get("/", function(req, res) {
  const rawData = fs.readFileSync(path.join(mainPath, "data", "blog.json"));
  const blogData = JSON.parse(rawData);
  res.render("home", {
    blog: blogData.images
  });
});


app.get("/portfolio", function(req, res) {
  const rawData = fs.readFileSync(path.join(mainPath, "data", "blog.json"));
  const blogData = JSON.parse(rawData);
  res.render("portfolio", {
    blog: blogData.images
  });
});

app.get("/contact", function(request, response) {
  response.render("contact");
});

app.get("/detailpage", function(req, res) {
  const rawData = fs.readFileSync(path.join(mainPath, "data", "blog.json"));
  const blogData = JSON.parse(rawData);
  res.render("detailpage", {
    blog: blogData.images
  });
});
// app luisteren naar applicatiepoort
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
