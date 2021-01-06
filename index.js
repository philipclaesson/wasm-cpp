const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendfile('./public/main.html')
})

app.get('/app.wasm.js', (req, res) => {
  res.sendfile('./public/app.wasm.js')
})

app.get('/app.wasm.wasm', (req, res) => {
  res.sendfile('./public/app.wasm.wasm')
})

app.get('/bindings.js', (req, res) => {
  res.sendfile('./public/bindings.js')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
