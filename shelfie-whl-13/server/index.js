require('dotenv').config()
const express=require ('express')
const ctrl = require('./controller')
const massive=require('massive')
const app=express()
const {SERVER_PORT, CONNECTION_STRING} = process.env


app.use(express.json())

//ENDPOINTS
app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addInventory)


massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`runnin wild on ${SERVER_PORT}`))
}).catch(err => console.log(err, `can not connect`))



