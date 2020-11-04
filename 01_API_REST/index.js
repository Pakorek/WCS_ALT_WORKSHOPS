const express = require('express')
const mongoose = require('mongoose')
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
.catch(() => console.error('db connexion failed'));

app.use(bodyParser.json())
app.use('/api/wilder', WilderRoutes )

// Last route : errorHandler
app.use( (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


// Start server
app.listen(4000, () => {
    console.log('Server start on port 4000')
})

console.log("Hello madafakaa");