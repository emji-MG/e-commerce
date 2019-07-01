const express = require('express')
const app = express()
require('dotenv').config()
const index = require('./routers/index.js')
const cors = require('cors')
const port = process.env.PORT || 3000
mongoose = require('mongoose')
const connection = process.env.ATLAS_CONNECTION
mongoose.connect(`${connection}`, {useNewUrlParser: true})
.catch((err)=>{
    console.log('Failed connect to Database')
})

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/', index)



app.listen(port, ()=>console.log(`listening to port :${port}`))

module.exports = app