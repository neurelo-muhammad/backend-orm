require('dotenv/config')
const express = require('express')
const db = require('./models/index.js')

const app = express()

app.get('/address', async (req, res, next) => {

})
app.get('/address/:id', async (req, res, next) => {})
app.post('/address', async (req, res, next) => {})
app.put('/address', async (req, res, next) => {})
app.delete('/address', async (req, res, next) => {})

app.use(async (req, res, next, err) => {
    console.log('encountered error', err)
    next()
})

app.listen(8080, () => console.log('backend is up'))