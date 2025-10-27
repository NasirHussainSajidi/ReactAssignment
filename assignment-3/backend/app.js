const express = require('express')
const cors =  require('cors')
const { connectDB } = require('dataBase');
const {Users} = require()


const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

const todos = [
    {
        id: 1,
        task: 'Learn JavaScript',
        completed: false
    },
    {
        id: 2,
        task: 'Learn Node.js',
        completed: false
    },
    {
        id: 3,
        task: 'Build a REST API',
        completed: false
    },
    {
        id: 4,
        task: 'Test the API',
        completed: false
    }
]   

app.get('/todos', (req, res) => {
  res.json("data send",todos)
})

app.post('/todos', (req, res) => {
  try {

    const { task } = req.body

    const newTodo = {
      id: todos.length + 1,
      task,
      completed: false
    }

    todos.push(newTodo)
    res.status(201).json(newTodo)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo', details: error.message })
  }
})
app.delete('/deletetodos/:id', async(req, res)=>{
    const {id} = req.params
    try {
        await User.findByIdAndDelete(id)
        res.send('User delete successfully ')
    } catch (error) {
        res.status(501).send('Use delete error')
    }

})

connectDB().then(() => {
    console.log('Database connected');

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });

}).catch((error) => {
    console.log('Database connection error:', error)
});



// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`)
// } )
