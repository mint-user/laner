const Sequelize = require('sequelize')
const db = require('../db')

const FlexSubject = db.define('flex_subject', {
    title: { type: Sequelize.STRING, allowNull: false },
    alias: { type: Sequelize.STRING, unique: true, allowNull: false },
    flexType: { type: Sequelize.STRING, allowNull: false},
})

const Account = db.define('account', {
    login: { type: Sequelize.STRING, unique: true, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false},
    jwtToken: {type: Sequelize.STRING},
})

const Workgroup = db.define('workgroup', {
    title: { type: Sequelize.STRING, allowNull: false },
    alias: { type: Sequelize.STRING, unique: true, allowNull: false }
})

const Field = db.define('field', {
    title: { type: Sequelize.STRING, allowNull: false },
    alias: { type: Sequelize.STRING, allowNull: false },
    type: { type: Sequelize.STRING, allowNull: false },
    flexType: { type: Sequelize.STRING, allowNull: false },
    requiredScript: { type: Sequelize.TEXT, allowNull: true },
    readonlyScript: { type: Sequelize.TEXT, allowNull: true },
    hiddenScript: { type: Sequelize.TEXT, allowNull: true },
})

Account.belongsTo(Workgroup, { foreignKey: 'workgroupId' })
// Workgroup.hasOne(Account)
Account.belongsTo(Account, { foreignKey: 'createdBy' })
Account.belongsTo(Account, { foreignKey: 'updatedBy' })
Workgroup.belongsTo(Account, { foreignKey: 'createdBy' })
Workgroup.belongsTo(Account, { foreignKey: 'updatedBy' })
FlexSubject.belongsTo(Account, { foreignKey: 'createdBy' })
FlexSubject.belongsTo(Account, { foreignKey: 'updatedBy' })
Field.belongsTo(FlexSubject, { foreignKey: 'flexObjectId' })
Field.belongsTo(Account, { foreignKey: 'createdBy' })
Field.belongsTo(Account, { foreignKey: 'updatedBy' })

async function struct(){
    await Account.sync({force: true})
    await FlexSubject.sync({force: true})
    await Workgroup.sync({force: true})
    await Field.sync({force: true})
    await Account.create({ id: 1, login: "admin", password: "$2b$12$tSfD4oYOD7b3kXNzDFE60u4R/JlCUSxRIF9/aC4myFSHmz836p/fq", workgroupId: 1, createdBy: 1})
    await FlexSubject.create({ id: 1,  title: "Flex subject", alias: "flex_subject", flexType: "system", createdBy: 1})
    await FlexSubject.create({ id: 2,  title: "Account", alias: "account", flexType: "system", createdBy: 1})
    await FlexSubject.create({ id: 3,  title: "Workgroup", alias: "workgroup", flexType: "system", createdBy: 1})
    await Workgroup.create({ id: 1,  alias: "admin", title: "Admin", createdBy: 1})
    
    await Field.create({title: "ID",  alias: "id", flexObjectId: 1, type: "PK", flexType: "system", createdBy: 1})
    await Field.create({title: "Created at",  alias: "createAt", flexObjectId: 1, type: "Datetime", flexType: "system", createdBy: 1})
    await Field.create({title: "Updated at",  alias: "updatedAt", flexObjectId: 1, type: "Datetime", flexType: "system", createdBy: 1})
    await Field.create({title: "Created by",  alias: "createdBy", flexObjectId: 1, type: "Reference", flexType: "system", createdBy: 1})
    await Field.create({title: "Updated by",  alias: "updatedBy", flexObjectId: 1, type: "Reference", flexType: "system", createdBy: 1})
    await Field.create({title: "Title",  alias: "title", flexObjectId: 1, type: "String", flexType: "system", createdBy: 1})
    await Field.create({title: "Alias",  alias: "alias", flexObjectId: 1, type: "String", flexType: "system", createdBy: 1})
    await Field.create({title: "Type",  alias: "type", flexObjectId: 1, type: "String", flexType: "system", createdBy: 1})

    await Field.create({title: "ID",  alias: "id", flexObjectId: 2, type: "PK", flexType: "system", createdBy: 1})
    await Field.create({title: "Created at",  alias: "createAt", flexObjectId: 2, type: "Datetime", flexType: "system", createdBy: 1})
    await Field.create({title: "Updated at",  alias: "updatedAt", flexObjectId: 2, type: "Datetime", flexType: "system", createdBy: 1})
    await Field.create({title: "Created by",  alias: "createdBy", flexObjectId: 2, type: "Reference", flexType: "system", createdBy: 1})
    await Field.create({title: "Updated by",  alias: "updatedBy", flexObjectId: 2, type: "Reference", flexType: "system", createdBy: 1})
    await Field.create({title: "Login",  alias: "login", flexObjectId: 2, type: "String", flexType: "system", createdBy: 1})
    await Field.create({title: "Password",  alias: "password", flexObjectId: 2, type: "String", flexType: "system", createdBy: 1})
    await Field.create({title: "JWT Token",  alias: "jwtToken", flexObjectId: 2, type: "String", flexType: "system", createdBy: 1})
    await Field.create({title: "Workgroup",  alias: "workgroupId", flexObjectId: 2, type: "Reference", flexType: "system", createdBy: 1})

    await Field.create({title: "ID",  alias: "id", flexObjectId: 3, type: "PK", flexType: "system", createdBy: 1})
    await Field.create({title: "Created at",  alias: "createAt", flexObjectId: 3, type: "Datetime", flexType: "system", createdBy: 1})
    await Field.create({title: "Updated at",  alias: "updatedAt", flexObjectId: 3, type: "Datetime", flexType: "system", createdBy: 1})
    await Field.create({title: "Created by",  alias: "createdBy", flexObjectId: 3, type: "Reference", flexType: "system", createdBy: 1})
    await Field.create({title: "Updated by",  alias: "updatedBy", flexObjectId: 3, type: "Reference", flexType: "system", createdBy: 1})
    await Field.create({title: "Title",  alias: "title", flexObjectId: 3, type: "String", flexType: "system", createdBy: 1})
    await Field.create({title: "Alias",  alias: "alias", flexObjectId: 3, type: "String", flexType: "system", createdBy: 1})
    await Field.create({title: "Type",  alias: "type", flexObjectId: 3, type: "String", flexType: "system", createdBy: 1})
}

// struct()





module.exports = Account