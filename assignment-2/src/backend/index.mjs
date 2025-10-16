import express from 'express'

const app = express()

app.use(app.json())

app.get('getApi', (req, res)=>{
    res.send("server is ready jani")
})

app.listen(3000, ()=>{
    console.log("this server is running on port 3000")
})