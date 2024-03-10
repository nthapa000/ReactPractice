import { useEffect, useState } from "react";
import axios from "axios";

export default function App(){
  return <div>
    <Todo id={5}/>
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
  },[])

  return <div>
    <h1>{todo.title}</h1>
    <h4>{todo.description}</h4>
  </div>
}
