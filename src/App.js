import React, { useState } from 'react'
import  "./App.css";

const App = () => {
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);
  const [edit,setEdit ]=useState(0);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(edit){
      const editId=todos.find((i)=>i.id===edit)
      const updateId=todos.map((i)=>i.id===editId.id?(i={id:i.id,todo}):({id:i.id,todo:i.todo}))
      setTodos(updateId)
      setEdit(0);
      setTodo("");
      return;
    }
    if(todo!==""){
      setTodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
      setTodo("");
    }
  }
  const handleDelete=(id)=>{
    const delTodo=todos.filter((t)=>t.id!==id);
    setTodos([...delTodo]);
  }
  const handleEdit=(id)=>{
      const editTodo=todos.find((i)=>i.id===id)
      setTodo(editTodo.todo);
      setEdit(id)

  }
  return (
    <div className='App'>
      <div className='container'>
          <h1>To Do list</h1>
          <form className='todoform' onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button type="submit">{edit?"Edit":"Go"}</button>
          </form>
          <ul className='alltodo'>
          {todos.map((t)=>
            <li className='singletodo'>
              <span className='todotext'>{t.todo }</span>
              <button onClick={()=>handleEdit(t.id)}>Edit</button>
              <button onClick={()=>handleDelete(t.id)}>Delete</button>
            </li>
          )}
            
          </ul>
      </div>
    </div>
  )
}

export default App