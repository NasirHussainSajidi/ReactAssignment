const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res)=>{
    console.log("data get hogaya ha jani")
    res.send("data get successful")
})

app.listen(port, ()=>{
    console.log(`server is running on port http://localhost:${port}`)
})