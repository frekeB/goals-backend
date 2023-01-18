const express = require('express')
const dotenv  = require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5001
const goalRoute = require('./routes/goalRoutes')
const userRoute = require('./routes/userRoutes')
var cors = require("cors")



connectDB()

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/goals', goalRoute)
app.use('/api/users',userRoute)
// app.use('/', (req,res)=>{res.send("thank you")})
app.use(errorHandler)

app.listen(port,()=> console.log(`Server started on port ${port}`))