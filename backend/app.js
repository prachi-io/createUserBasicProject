require("dotenv").config()

const connectToDB = require("./config/db")
connectToDB()

const express = require("express")
const app = express()

const userRoutes = require("./Routes/userRoutes")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",userRoutes)

module.exports = app;


