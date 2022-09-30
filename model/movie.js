const mongoose = require("mongoose")
const { stringify } = require("querystring")

const uri = process.env.MONGODBURI

mongoose.connect(uri)
.then(result=>console.log("connected successfully"))
.catch(err=>console.log(err))

const movieSchema= new mongoose.Schema({
    movieName: String,
    yearOfRelease: String,
    producer:String,
    actors: [
        String
    ]
})

movieSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports= mongoose.model('Movie', movieSchema)