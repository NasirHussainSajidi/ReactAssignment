import {useState} from "react"
import './App.css'


function App() {
  const [task, setTask] = useState("");      // single input value
  const [todos, setTodos] = useState([]);    // list of todos

  // add new task
  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask(""); // input clear
    }
  };

  const editTodo = (index) =>{
    

  }
  // delete todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="main_container">
      <div>

      <h2>My To-Do App</h2>
      </div>


      <div className="main_section">
      <input
      className="input-section"
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        />

      <button className="add-btn" onClick={addTodo}>Add</button>
        </div>
        <div>

      <ul className="addtodo" style={{ listStyle: "none", padding: 0 }}>
        {todos.map((t, index) => (
          <div className="border">

          <li key={index}>
            {t}{" "}
            <div className="btn-cont">

            <button className="del-btn" onClick={() => deleteTodo(index)} >
              Delete
            </button>
           <button className="edit-btn" onClick={() => edit(index)} >
              edit
            </button>
            </div>
          </li>
          </div>
        ))}
      </ul>
        </div>
    </div>
  );
}

export default App;
