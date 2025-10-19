import express from 'express'
import users  from './user.js'


const app = express()

app.use(express.json())

app.get("/Api", (req, res) =>{
    res.send(users)
})

// app.get('/', (req, res)=>{
//     console.log("hello jani")
//     res.send("server is ready jani")
// })
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
})