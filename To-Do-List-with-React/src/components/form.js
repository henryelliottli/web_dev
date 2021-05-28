import React from 'react'; //imported from node modules

const Form = ({inputText,setInputText, setToDos, toDos, filteredToDos, setStatus, setFilterToDos, filterHandler}) => {
    //writing JS code

    const inputTextHandler = (event) =>{
      setInputText(event.target.value);
    };

    const onSubmitHandler = async (event) => {
      event.preventDefault();
      setToDos([...toDos, {text: inputText, completed: false, id: Math.random()*10000}]);
      setInputText('');
    }

    const onChangeHandler  = (event) => {
      const isCompleted = event.target.value;
      setStatus(isCompleted);
    }

    const inputValue = React.useRef();

    return  (
    <form onSubmit = {onSubmitHandler} >
    <input ref={inputValue} value = {inputText} type="text" className="todo-input" onChange = {inputTextHandler} />
    <button className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select onChange = {onChangeHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  </form>
    );
}

export default Form;