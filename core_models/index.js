const Sequelize = require('sequelize')
const db = require('../db')

const Workgroup = db.define('workgroup', {
    title: { type: Sequelize.STRING, unique: true, allowNull: false },
    alias: { type: Sequelize.STRING, unique: true, allowNull: false }
})

const Account = db.define('account', {
    login: { type: Sequelize.STRING, unique: true, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false},
    jwtToken: {type: Sequelize.STRING}
})

Account.belongsTo(Workgroup)
Workgroup.hasOne(Account)

async function struct(){
    await Workgroup.sync({force: true})
    // await Account.belongsTo(Workgroup)
    // await Workgroup.hasOne(Account)
    await Account.sync({force: true})
    await Workgroup.create({ alias: "admin", title: "Admin"})
    await Account.create({ login: "admin", password: "admin", workgroupId: 1})
}

struct()




// Account.sync()
//    .then(() => {
//        Account.findOne()
//    })

// check admin existing
// Account.findOne()

module.exports = Account