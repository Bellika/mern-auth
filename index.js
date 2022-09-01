require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))