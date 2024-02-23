const express = require('express')
const mongoose = require('mongoose')
const PORT = 1000;



const app = express()

//connection to mongoDB
mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//middlewares

app.use(express.urlencoded({ extended: true }))
app.use(express.static("Public"))

app.set("view engine", "ejs");


//routes integrate
app.use(require("./Routes/index"))
app.use(require("./Routes/todo"))

app.listen(PORT, () => {
    console.log(`Listen on ${PORT}`);
})