const express = require("express");
const app = express();
require('dotenv').config()

//Middleware
const errorMiddleware = require('./routers/errorMiddleware')
//Query Script
const userRegister = require('./sql/userRegister')
const loginCheck = require('./sql/loginCheck')
const changePw = require('./sql/changePw')
const createTodo = require('./sql/createTodo')
const getTodo = require('./sql/getTodo')
const deleteTodo = require('./sql/deleteTodo')

// ######################################## //
//Handle Body
app.use(express.json())

//Register
app.post('/register',userRegister)

//Login
app.post('/login',loginCheck)

//Change Password
app.post('/changepw',changePw)

//Create Todo
app.post('/todo',createTodo)

//Get Todo
app.get('/todo',getTodo)

//Delete Todo
app.delete('/todo/delete/:id',deleteTodo)

//Not Found and Erros
app.use((req,res)=>{
    res.json({msg : "PATH NOT FOUND"})
})
app.use(errorMiddleware)


const port = process.env.PORT | 8080
app.listen(port,()=>{
    console.log('Server is Ready on PORT =>',+port)
})