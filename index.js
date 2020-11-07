const express = require('express')
const router = require('./routes')
const config = require('config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

PORT = config.get('port') || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))