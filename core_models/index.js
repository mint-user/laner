var Sequelize = require('sequelize')
const db = require('../db')

var Account = db.define('account', {
    login: { type: Sequelize.STRING, unique: true, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false},
    jwtToken: {type: Sequelize.STRING}
   })

// Account.sync({force: true})
Account.sync()

module.exports = Account