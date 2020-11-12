const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WilderSchema = new Schema({
  name: { type: String, unique: true, required: true },
  city: String,
  skills: [{ title: String, vote: Number }]
})

export default mongoose.model('wilder', WilderSchema)
