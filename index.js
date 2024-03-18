require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("you are on twitter now");
});

app.get("/login", (req, res) => {
  res.send("<h1>Shashikant verma hu mai bhai </h1>");
});

app.get("/chai", (req, res) => {
  res.send(process.env);
});
app.listen(process.env.PORT, () => {
  console.log("run ho rha hai bsdk ", port);
});
