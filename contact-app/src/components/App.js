import React, {useState, useEffect} from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import {uuid} from 'uuidv4';

function App() {
  const local_storage_key = "contacts";
  const [contacts, setContacts] = useState([]
  //   () => {
  //   const initialValue = JSON.parse(localStorage.getItem(local_storage_key));
  //   // const initialValue = JSON.parse(saved)
  //   return initialValue || ""
  // }
  )
  
  const addContactHandler = (contact) => {
      //add new contact to existing contact
      setContacts([...contacts, {id: uuid(),...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
        return contact.id !== id});
    setContacts(newContactList);
  }
  //when the values changes, useEffect helps us render the component again

  //initial value to pull from local storage
  useEffect(()=>{
    const initialValue = JSON.parse(localStorage.getItem(local_storage_key))
    if (initialValue)
        setContacts(initialValue)
  }, [])

  //stores any new input values into local storage
  useEffect(()=>{
    localStorage.setItem(local_storage_key, JSON.stringify(contacts));
  }, [contacts])

  return (
      <div className ="ui container">
        <Header />
        {/* pass in a function as a prop when we need to pass props from child to parent*/}
        <AddContact addContactHandler = {addContactHandler} />
        <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>
      </div>
  );
}

export default App;
