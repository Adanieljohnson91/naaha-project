import React from 'react';
import eventService from "../../services/eventService";
import { Link } from "react-router-dom";
import "./cards.css"

const ContactEventCard = (props) => {
    const handleDelete = async () => {
        console.log("deleting", props.event.id);
        await eventService.deleteEvent(props.event.id)
        props.getEvents();
    }
    const url = `/event/${props.event.id}`
    return (
        <>
            <div className="card-custom card-shadows" style={{ width: "18rem" }}>

                <div className="card-body-custom ">
                    <h5 className="card-title">{props.event.name || "Bob"}</h5>
                    <p className="card-text">
                        {props.event.date || "NA"}</p>
                    <Link to={url} className="btn btn-primary">
                        Go somewhere </Link>
                    <button type="button" className="btn btn-danger" onClick={handleDelete} >Delete Me</button>
                </div>
            </div>
        </>
    )
}
export default ContactEventCard;