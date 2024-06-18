import { useEffect, useRef, useState } from "react"
import "./css/Todo.css"
import TodoItems from "./TodoItems";

let number = 0;

const Todo = () => {

  const [ todo, setTodo ] = useState([]);
  const inputRef = useRef(null);

  function add() {

    setTodo([
      ...todo,
      {
        number: number++,
        text: inputRef.current.value,
        display: ""
      }
    ]);

    inputRef.current.value = "";
    localStorage.setItem('todo_number', number);
  }

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem('todo')));
    number = localStorage.getItem('todo_number');
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('todo', JSON.stringify(todo));
    }, 100)
  }, [todo]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder="Add Your Task" className="todo-input"/>
        <div onClick={add} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {
          todo.map((items, index) => (
            <TodoItems 
              key={index} 
              number={items.number} 
              display={items.display} 
              text={items.text}
              setTodo={setTodo}
            />
          ))
        }
      </div>
    </div>
  )
}
export default Todo