import React from 'react';

const Todo = ({todo, toDos, setToDos, filteredToDos, setFilterToDos, status}) => {
    const deleteHandler= (event) => {
        event.preventDefault();
        setToDos(toDos.filter( el => el.id !== todo.id))
    }

    const completedHandler = () =>  {
        setToDos(toDos.map((el) => {
            if (el.id === todo.id){
                return {...el, completed : !el.completed}
            }
            return el
        }))

    }

    return (
        <div className="todo">
            <li className={`todo-item" ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <button className = "complete-btn" onClick = {completedHandler}>
                <i className="fas fa-check"></i>
                </button>
            <button className = "trash-btn" onClick = {deleteHandler}>
                <i className="fas fa-trash"></i>
                </button>
        </div>
        );
}

export default Todo;