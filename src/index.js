const express = require("express");
const server = express();
const bodyParser = require("body-parser");

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
})

const {  Index, Register, Deletar, Post, } = require("./page")

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(express.static("public"))
.get("/", Index)
.get("/register", Register)
.get("/deletar/:id", Deletar)
.post("/post", Post)
.listen(5500, () => {
  console.log("Servidor rodando!");
  console.log("URL: http://localhost:5500");
})