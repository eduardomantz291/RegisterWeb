const express = require("express");
const server = express();
const bodyParser = require("body-parser");

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
})

function Index(req, res) {
  return res.render("account.html")
}

function Register(req, res) {

  return res.render("register.html")
}

function Post(req, res) {
  return res.send("Nome: " + req.body.registerName + "Email: " + req.body.registerEmail + "avatar:" + req.body.registerAvatar + "bio: " + req.body.textareaBio)
}

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(express.static("public"))
.get("/", Index)
.get("/register", Register)
.post("/post", Post)
.listen(5500, () => {
  console.log("Servidor rodando!");
  console.log("URL: http://localhost:5500");
})