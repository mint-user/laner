const express = require('express')

const config = require('config')
const router = require('./routes')
const db = require('./db')


const app = express()
const PORT = config.get('port') || 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

try {
    db.query('SELECT 1;')
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
} catch(e) {
    console.error(e)
}

const acc = require('./core_models')
