import { useEffect, useState } from "react";
import axios from "axios";
// cleaner syntax to do the fetch call

export default function App(){
  const [currentId,setCurrentId] = useState(1)

  return <div>
    <button onClick={function(){
      setCurrentId(1)
    }}>1</button>
    <button onClick={function(){
      setCurrentId(2)
    }}>2</button>
    <button onClick={function(){
      setCurrentId(3)
    }}>3</button>
    <button onClick={function(){
      setCurrentId(4)
    }}>4</button>

    <Todo id={currentId}/>
  </div>
}

function Todo({id}){
  
  const [todo,setTodo] = useState({});

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then(response => {
      setTodo(response.data.todo)
      // what our backend returns
    })
  },[id])

  return <div>
    Id:{id}
    <h1>{todo.title}</h1>
    <h4>{todo.description}</h4>
  </div>
}
