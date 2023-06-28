const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt")
const {validateToken} = require("../middlewares/AuthMiddleware")
const { sign } = require('jsonwebtoken')

router.post("/", async (req, res) => {
  const {username, password} = req.body;
    await  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
        username: username,
        password: hash,
    })
   return res.json("SUCCESS!")
  })
});

router.post('/login',async (req, res) => {
    const {username, password} = req.body;
    
    const user = await Users.findOne({where: {username: username}   });         

     if(!user) {
        return res.json({error: "User not found"})
    }
    
    bcrypt.compare(password, user.password).then((match) => {
        if(!match) {
            return res.json({error: "Wrong Username and Password Combination"})
        }
        const accessToken = sign({ username: user.username, user: user.id}, 
          "importantsecret",)
      return  res.json(accessToken)
    })

})

router.get('/auth', validateToken, (req,res) => {
  res.json(req.user)
})
module.exports = router;
