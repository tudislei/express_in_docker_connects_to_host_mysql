const express = require('express');
const myRoutes = require('./routes')

const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(' middleware logging...... ')
    next()
})

app.use('/api', myRoutes)

port = 5001
app.listen(port, ()=>{
    console.log('hi, express is on port ' + port)
})

//docker build . -t stupid531/test-express
//docker run -p 49160:5001 stupid531/test-express
