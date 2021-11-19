import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    
    // create a function above the return statement to render each contact as a JSX item
    const renderContactList = props.contacts.map( (contact) => {
        return (
            <ContactCard contact = {contact} removeContactCard = {props.getContactId} ></ContactCard>
        );
    });
    return(
        <div className='ui celled list'> {renderContactList} </div>
        
    );
}

export default ContactList;