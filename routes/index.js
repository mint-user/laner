const {Router} = require('express')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Account = require("../core_models");

const router = Router()

router.post('/sign_in', async (req, res) => {
  let errors = []
  // if (!req.body.login){ errors.push("Login has not been received") }
  if (!req.body.login){ sendAnswer(res, ["Login has not been received"]) }
  // if (!req.body.password) { errors.push("Passwod has not been received") }
  if (!req.body.password) { sendAnswer(res, ["Passwod has not been received"]) }
  
  const { login, password } = req.body

  try {
    acc = await Account.findOne({where: {login: login}})
    if (acc){
      const passMatch = await bcrypt.compare(password, acc.password)
      if(passMatch){
        token = jwt.sign({ id: acc.id }, "secret", { expiresIn: '1h' })
      } else {errors.push("wrong passwod")}
    } else { {errors.push("user not found")} }
    
  } catch (error) { errors.push(`Something goes wrong: ${error}`) }

  sendAnswer(res, errors)
})

function sendAnswer(res, errors){
  if (errors.length>0) {
    res
      .set('content-type','application/json')
      .status(401)
      .json({"stat": "fail","errors": errors})  
  } else {
    res
      .set('content-type','application/json')
      .status(200)
      .json({token: token, accountId: acc.id})
  }
}


module.exports = router 