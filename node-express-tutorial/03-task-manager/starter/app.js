const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

// routes
app.get('/hello', (req, res)=> {
    res.send('Task Manager App')
    res.end()
})

app.use('/api/v1/tasks', tasks)

const port = 3000

app.listen(port, console.log(`server is listeneing on port ${port}...`))