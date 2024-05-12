import Header from "./components/Header"
import Container from "./components/Container"
import TodoItem from "./components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput"
import ErrorMessage from "./components/ErrorMessage";
import './App.css'
import { useState,useEffect } from "react";
import axios from 'axios';

function App() {

  //const todoItem = ["Cricket","Study","Football"];
  let [todoItem,setTodoItem] = useState([]);
  let [taskState,setTaskState] = useState();

  useEffect(()=>{
    const fetchAllBooks = async () =>{
        try{
            const res = await axios.get("http://localhost:3000/fetch");
            console.log(res.data);
           setTodoItem(res.data);
        }catch(err){
            console.log(err);
        }
    }
    fetchAllBooks();
},[]);


const sumbitData = (event) =>{
 // event.preventDefault();
  const desc = event.target.description.value;
  console.log(event.target.description.value)

  const res = axios.post("http://localhost:3000/addtodo", { description: desc })

  .then((response) =>{

    setTodoItem(res.data);

    console.log(response);
    event.target.reset();
  })
  .catch((err) =>{
    console.log(err)
  });
} ;

  return (
    <Container>
      <Header/>
      <TodoInput sumbitData={sumbitData}/>
      <p>{taskState}</p>
      <ErrorMessage items = {todoItem}/>
      <TodoItem items= {todoItem}/>
    </Container>
  )
}

export default App
