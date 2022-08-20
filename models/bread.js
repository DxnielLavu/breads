// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'https://placekitten.com/500/500' },
    baker: {
      type: String,
      enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }
})

// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
