import express, { Request, Response, NextFunction } from 'express'
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const WilderRoutes = require('./routes/wilders')

const app = express()

// database
mongoose.connect('mongodb://127.0.0.1:27017/wilderdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  createIndex: true
})
  .then(() => console.log('db connected'))
  .catch(() => console.error('db connexion failed'))

app.use(cors())
app.use(bodyParser.json())
app.use('/api/wilder', WilderRoutes)

// Last route : errorHandler
app.use((error:any, req:Request, res:Response, next:NextFunction) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    res.status(400)
    res.json({ success: false, message: 'The name is already used' })
  }
})

// Start server
app.listen(4000, () => {
  console.log('Server start on port 4000')
})

// console.log("Hello madafaka");
