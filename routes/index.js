const {Router} = require('express')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Account = require("../core_models");

const router = Router()

router.post('/sign_in', async (req, res) => {
  let errors = []
  if(!req.body.login){ errors.push("Login has not been received") }
  if (!req.body.password) { errors.push("Passwod has not been received") }
  if(errors.length>0){
    res
      .set('content-type','application/json')
      .status(404)
      .json({"stat":"fail","errors":errors})  
  }

  const { login, password } = req.body

  try {
    const acc = await Account.findOne({where: {login: login}})
    console.log(acc)
    if(!acc){res.status(401).json({"mess":"user not found"})}
    // const hashedPass = await bcrypt.hash(password, 12)
    const passMatch = await bcrypt.compare(password, acc.password)
    if(!passMatch){res.status(401).json({"mess":"wrong passwod"})}
    const token = jwt.sign(
      { id: acc.id },
      "secret",
      { expiresIn: '1h' }
    )
    res.status(200).json({token: token, accountId: acc.id})
  } catch (error) {
    res.status(500).json(`Something goes wrong: ${error}`)
  }
})



module.exports = router 