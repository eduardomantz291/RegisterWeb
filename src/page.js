const Usuario = require("./models/Usuario")

function Index(req, res) {
  Usuario.findAll().then( users => {
    return res.render("account.html", {users: users})
  })
}

function Register(req, res) {

  return res.render("register.html")
}

function Deletar(req,res) {
  return Usuario.destroy({where: {'id': req.params.id}}).then( () =>{
    res.redirect("/");
  } ).catch( erro => {
      res.send("Houve um erro! " + erro);
  })
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
}

module.exports = {
  Index,
  Register,
  Deletar,
  Post,
}