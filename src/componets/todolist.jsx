import { useState } from "react"


function ToDoList(){
  const [todoList, setToDoList] = useState([
    {text: "Go shopping"},
    {text: "Wash dishes"},
    {text: "Clean car"}
  ])

  const AddItemList = () => {
    setToDoList(...prevState => [])
  }

  const DeleteItemList = index => {
    setToDoList(prevState => {
      const update = [...prevState]
      update[index] = !update[index]
      return update})
  }

  const BuildItems = todoList.map((item, index) => {
    return (
      <>
      {item.text && <div className="todo-item" key={index} id={`todo-item-${index}`}>
        <h1>{item.text}</h1>
        <div className="todo-item-btn">
          <button className="btn btn-success">Edit</button>
          <button className="btn btn-danger" onClick={() => DeleteItemList(index)}>Delete</button>
        </div>
      </div>}
      </>
    )
  })

  return (
    <div className="container">
      <h1>React to-do List</h1>
      <div className="input-field">
        <input className="form-control" id="list-content"/>
        <button className="btn btn-primary" onClick={AddItemList}>Add</button>
      </div>
      <div className="list-item-container">
        {BuildItems}
      </div>
    </div>
  )
}

export default ToDoList