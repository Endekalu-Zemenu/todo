import "./css/TodoItems.css"
import tick from "./assets/tick.png"
import not_tick from "./assets/not_tick.png"
import cross from "./assets/cross.png"

const TodoItems = ({ number, display, text, setTodo }) => {

  function toggle(number) {
    const data = JSON.parse(localStorage.getItem('todo'));

    const result = data.find((item) => item.number === number);

    result 
    ? ( result.display === "" ? (result.display = "completed") : (result.display = ""))
    : console.log("Item not found");

    setTodo(data);
  }

  function removeItem(number) {
    const data = JSON.parse(localStorage.getItem('todo'));
    const result = data.filter(item => item.number !== number);

    setTodo(result);
  }

  return (
    <div className="todo-items">
      <div className="todo-items-container" onClick={() => {toggle(number)}}>

        {
          display === "" ?
          <img src={not_tick} alt="" /> :
          <img src={tick} alt="" />
        }
        
        <div className={`todo-items-text ${display}`}>{text}</div>
      </div>
      <img src={cross} className="todo-items-cross-icon" onClick={() => {removeItem(number)}}/>
    </div>
  )
}
export default TodoItems