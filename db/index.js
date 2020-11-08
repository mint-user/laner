const { Sequelize } = require('sequelize')
const config = require('config')


const pgConnection = config.get('pgConnection')
const sequelize = new Sequelize(pgConnection);

// const pool = new Pool({
//     user: 'docker',
//     host: 'localhost',
//     database: 'laner',
//     password: 'docker',
//     port: 5432,
//   })

try {
    module.exports = sequelize
} catch(e) {
    console.error(e)
}
