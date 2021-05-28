import React, { useEffect, useState } from "react";
import './App.css';
//importing Components
import Form from './components/form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState(JSON.parse(localStorage.getItem("ToDoList")));
  const [status, setStatus] = useState('all');
  const [filteredToDos, setFilterToDos] = useState([]);

  const filterHandler = () =>{
    if (status === "all"){
      return toDos
    }
    else if(status === "completed"){
      return toDos.filter(el => el.completed === true)
    }
    else if (status === "incomplete"){
      return toDos.filter(el => el.completed === false)
    }
    else{
      alert("this is not a valid filter")
    }
  }
  //rerender everytime status and toDos changes 
  React.useEffect(()=>{
    setFilterToDos(filterHandler);
  },[toDos, status])

  React.useEffect(()=>{
    saveToDos();
    console.log(JSON.parse(localStorage.getItem("ToDoList")))
  })

  function saveToDos() {
    if (localStorage.getItem("ToDoList") === null){
      window.localStorage.setItem("ToDoList",JSON.stringify([]));  
    }
    else{
      window.localStorage.setItem("ToDoList",JSON.stringify(toDos));
    }
  }

  return (
    <div className="App">
      <header>Henry's ToDo List</header>
      <Form 
        inputText = {inputText} 
        setInputText = {setInputText} 
        setToDos = {setToDos} 
        toDos = {toDos}
        filteredToDos = {filteredToDos} 
        setStatus = {setStatus}
        setFilterToDos = {setFilterToDos}
        filterHandler = {filterHandler}
        />
      <ToDoList 
        toDos={toDos} 
        setToDos={setToDos} 
        filteredToDos ={filteredToDos} 
        setFilterToDos={setFilterToDos}/>
    </div>
  );
}

export default App;

