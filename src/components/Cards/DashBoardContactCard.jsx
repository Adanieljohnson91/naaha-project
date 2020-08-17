import React from 'react';
import contactService from "../../services/contactService";
import { Link } from "react-router-dom";
import "./cards.css"

const ContactCard = (props) =>{
    const handleDelete = async () =>{
      await contactService.deleteContact(props.contact.id)
        props.getContacts();
    }
    const contactURL = `contact/${props.contact.id}`
    return (
        <>
        <div className="card-custom card-shadows" style={{ width: "18rem" }}>

<div className="card-body-custom">
    <img className="image-size align-content-center" src={props.contact.image || "https://g.foolcdn.com/editorial/images/578933/square01.jpg"}/>
    <h5 className="card-title"></h5>
    <p className="card-text">
      {props.contact.firstname || "Bob"} {props.contact.lastname}</p>
    <Link to={contactURL} className="btn btn-primary">
        Contact Info </Link>
        <button type="button" className="btn btn-danger ml-1" onClick={handleDelete} >Delete Me</button>
</div>
</div>
        </>
    )
}
export default ContactCard