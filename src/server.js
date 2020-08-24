const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const Usuario = require("./models/Usuario")

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
  
   Usuario.create({
     name: req.body.registerName,
     email: req.body.registerEmail,
     password: req.body.registerPassword,
     avatar: req.body.registerAvatar,
     bio: req.body.textareaBio
   }).then( () => {
     res.redirect("/");
   }).catch( erro => {
     res.send("Houve um erro na hora do Registro" + erro);
   })

  //return res.send("Nome: " + req.body.registerName + "Email: " + req.body.registerEmail + "avatar:" + req.body.registerAvatar + "bio: " + req.body.textareaBio)
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