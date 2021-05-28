import React from 'react';
import Todo from './Todo';

const ToDoList = ({toDos, setToDos, filteredToDos, status, setFilterToDos}) => {
    
    return (
        <div className="todo-container">
        <ul className="todo-list">
          {
            filteredToDos.map((e) => {
              return (
                <Todo 
                  key = {e.id} 
                  todo = {e} 
                  setToDos = {setToDos} 
                  toDos = {toDos} 
                  filteredToDos = {filteredToDos} 
                  setFilterToDos ={setFilterToDos} 
                  status = {status}/>
              )
            })
          }
        </ul>
      </div>
    );
}

export default ToDoList;