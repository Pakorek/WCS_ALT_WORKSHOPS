const express = require('express')
const mongoose = require('mongoose')
const WilderModel = require('./models/Wilder')

const app = express()

// database
mongoose.connect('mongodb://127.0.0.1:27017/wilderdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        createIndex: true
    })
    .then(() => console.log('db connected'))
    .catch(() => console.error('db connexion failed'));

app.get('/', (req,res) => {
    res.send('Hello world')
    WilderModel.init().then( () => {
            const newWilder = new WilderModel({
                name: "Smokey",
                city: "Viviers",
                skills: [{title: "Sleeping", vote: 987}]
            })
            newWilder.save()
                .then(result => console.log("success", result))
                .catch(error => console.error("error", error))
        }
    )
    .catch(err => console.log("error", err))
})

// Start server
app.listen(3000, () => {
    console.log('Server start on port 3000')
})

console.log("Hello madafaka");