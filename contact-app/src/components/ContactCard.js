import React from 'react';
import user from '../images/user.png'

const ContactCard = (props) => {
    const {id, name, email} = props.contact
    function onClickDelete(e) {
        e.preventDefault();
        props.removeContactCard(id)
    }
    return(
    <div className ="item">
            <img className = "ui avatar image" src={user} alt ="user"/>
        <div className ="content">
            <div className="header">
                {name}
            </div>
            <div>{email}</div>
            <i className = "trash alternate outline icon" 
            style = {{color: "red", marginTop:"7px"}} onClick = {onClickDelete} ></i>
        </div>
    </div>
    )
}
export default ContactCard;