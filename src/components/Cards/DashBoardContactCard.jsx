import React from 'react';
import contactService from "../../services/contactService";
import { Link } from "react-router-dom";
import "./cards.css"

const ContactCard = (props) =>{
    const handleDelete = async () =>{
        console.log("deleting", props.contact.id)
      await contactService.deleteContact(props.contact.id)
        props.getContacts();
    }
    const contactURL = `contact/${props.contact.id}`
    return (
        <>
        <div className="card-custom card-shadows" style={{ width: "18rem" }}>

<div className="card-body-custom">
    <h5 className="card-title">{props.contact.firstname || "Bob"}</h5>
    <p className="card-text">
       {props.contact.lastname}</p>
    <Link to={contactURL} className="btn btn-primary">
        Contact Info </Link>
        <button type="button" onClick={handleDelete} >Delete Me</button>
</div>
</div>
        </>
    )
}
export default ContactCard