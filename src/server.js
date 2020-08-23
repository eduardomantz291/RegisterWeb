const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/account.html");
})

server.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
})

server.listen(5500, () => {
  console.log("Servidor rodando!");
  console.log("URL: http://localhost:5500");
})