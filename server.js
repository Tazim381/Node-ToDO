const express = require('express')

const port =5000;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/todos', require('./routes/todoRoutes'))

app.listen(port,()=>{
    console.log("server is running and listening")
})