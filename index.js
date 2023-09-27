require('dotenv/config')
const express = require('express')
const db = require('./models/index.js')
const {dtoValidate:$} = require('./utils/index.js')
const dto = require('./dto/address.js')

const app = express()
app.use(express.json())

app.get('/address', async (req, res, next) => {
    const list = await db.address.findAll()
    res.json({data: list, ok:true})
})
app.get('/address/:id', async (req, res, next) => {
    const {id} = req.params
    const address = await db.address.findOne({where:{id}})
    res.json({id, data: address})
})
app.post('/address',$(dto.addressCreate), async (req, res, next) => {
    const data = req.body
    const address = await db.address.create(data)
    res.json({ok:true, data: address})
})
app.put('/address', $(dto.addressUpdate), async (req, res, next) => {
    const data =req.body
    const _address= await db.address.findByPk(data.id)
    if (!_address) return res.status(404).json({ok:false})
    const address = _address.toJSON()
    await _address.update({...address, ...data})
    res.json({ok:true, data: _address.toJSON()})
})
app.delete('/address/:id', async (req, res, next) => {
    const {id} = req.params
    await db.address.destroy({where:{id}})
    res.json({ok:true})
})

app.use((err, req, res, next) => {
    if (err) console.log('error', err)
})

app.listen(8080, () => console.log('backend is up'))