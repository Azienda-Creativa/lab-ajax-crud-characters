const axios = require("axios")
const express = require("express")
const app = express()
const path = require("path")
let port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const index = require("./routes/index.routes")
app.use("/", index)

const charactersRoutes = require("./routes/characters.routes")
app.use("/", charactersRoutes)

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})
