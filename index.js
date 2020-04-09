
const cors = require('cors')
const express = require('express')
const { PORT } = require('./constants')
const router = require('./router')

const app = express()

app.use(cors())

router(app)

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
