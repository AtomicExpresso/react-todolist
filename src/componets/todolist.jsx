import { useState } from "react"


function ToDoList(){
  //Array that holds all the to-do list items
  const [todoList, setToDoList] = useState([
    {text: "Go shopping", editMode: false},
    {text: "Wash dishes", editMode: false},
    {text: "Clean car", editMode: false}
  ])

  //Current input for the top input field, data here will be sent to the todolist array when the form is submitted
  const [curInput, setCurInput] = useState({text: ""})

  //When the form is submitted, it adds the content from the "curInput" array to the "todolist" array
  const AddItemList = (e) => {
    e.preventDefault();
    setToDoList(prevState => [...prevState, curInput])
    console.log(todoList)
  }

  //Handles the input field change for the top input field.
  const HandleInputChange = event => {
    setCurInput({text: event.target.value})
    console.log(curInput)
  }

  //Deletes the current item from the array
  const DeleteItemList = index => {
    setToDoList(prevState => {
      const update = [...prevState]
      update[index] = !update[index]
      return update})
  }

  //Changes the text to an input field and if you click the button again it changes it back to text
  const EditItemList = index => {
    setToDoList(prevState => {
      const update = [...prevState]
      update[index] = {...update[index], editMode: !update[index].editMode}
      return update})
  }

  //Handles the change on the edit input field
  const HandleChange = (event, index) => {
    setToDoList(prevstate => {
      const update = [...prevstate]
      update[index] = {...update[index], text: event.target.value}
      return update
    })
  }

  //Adds to-do list items from the array to the DOM and re-renders everytime the todolist array state is changed, i added spacing to the jsx so its easier to read.
  const BuildItems = todoList.map((item, index) => {
    return (
      <>
      {item.text && <div className="todo-item" key={index} id={`todo-item-${index}`}>
        
        {item.editMode ? <input className="form-control" type="text" name={item.text} value={item.text} onChange={e => HandleChange(e, index)}></input> : <h1>{item.text}</h1>}

        <div className="todo-item-btn">

          <button className={item.editMode ? "btn btn-primary" : "btn btn-success"} onClick={() => EditItemList(index)}>{item.editMode ? "Update" : "Edit"}</button>

          <button className="btn btn-danger" onClick={() => DeleteItemList(index)}>Delete</button>
        </div>
      </div>}
      </>
    )
  })

  //Renders the JSX
  return (
    <div className="container">
      <h1>React to-do List</h1>
      <div className="input-field">
        <form onSubmit={AddItemList}>
          <input className="form-control" id="list-content" onChange={e => HandleInputChange(e)}/>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
      <div className="list-item-container">
        {BuildItems}
      </div>
    </div>
  )
}

export default ToDoList