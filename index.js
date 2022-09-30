require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Movie= require("./model/movie")

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("<h1>Running at port 3001</h1>")
})

app.get("/api/movie",(req,res)=>{
    Movie.find({}).then(movie=>res.json(movie))
})
app.get("/api/movie/:id", (req, res) => {
    console.log(typeof(req.params.id))
    Movie.findById(req.params.id).then(movie => res.json(movie))
})


app.post("/api/movie",(req,res)=>{
    const movieName =req.body.movieName
    const yearOfRelease = req.body.yearOfRelease
    const producer= req.body.producer
    const temp = req.body.actors.split(",")
    const actors = temp.map(tem => tem.replace(/,/g, ''))
    var text = req.body.actors
    var array = text.split(/[,]/);
    console.log(array.map(arr => arr.trim(/\s/g, '')))

    const movie = new Movie({
        movieName : movieName,
        yearOfRelease : yearOfRelease,
        producer: producer,
        actors: actors
    })

    movie.save().then(resp=>res.json(resp))
})

app.put('/api/movie/:id',(req,res)=>{
    console.log("reached put request")
     const id = req.params.id
     const movieName = req.body.movieName
     const yearOfRelease = req.body.yearOfRelease
     const producer = req.body.producer
     const actors = req.body.actors

     const movie = ({
         movieName: movieName,
         yearOfRelease: yearOfRelease,
         producer: producer,
         actors: actors
     })
     console.log(typeof(id))
     Movie.findByIdAndUpdate(id,movie,{new:true}).then(updatedMovie=>res.json(updatedMovie))
})

app.delete('/api/movie/:id',(req,res)=>{
    const id=req.params.id
    Movie.findByIdAndRemove(id).then(()=>res.status(204)).end
})

const port = process.env.PORT
app.listen(port, () => {
    console.log("server's running at port 3001")
})