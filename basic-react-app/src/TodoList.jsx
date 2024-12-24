import { useState } from 'react';

export default function TodoList() {
    let[todos, setTodos] = useState(["sample Task"]);
    let[newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <div>
            <input
             placeholder="Add a new todo" 
             value={newTodo}
             onChange={updateTodoValue} /> 
            <br></br>
            <button onClick={addNewTodo}>Add Task</button>
            <br></br><br></br><br></br>
          <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
            {todos.map((todo) => (
                <li>{todo}</li>
            ))}
            </ul>
        </div>
    );
}