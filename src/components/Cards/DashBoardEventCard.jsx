import React from 'react';
import eventService from "../../services/eventService";
import { Link } from "react-router-dom";
import "./cards.css"

const EventCard = (props) => {
    const handleDelete = async () => {
        await eventService.deleteEvent(props.event.id)
        props.getEvents();
    }
    const url = `/event/${props.event.id}`
    return (
        <>
            <div className="card-custom card-shadows" style={{ width: "18rem" }}>

                <div className="card-body-custom ">
                <img className="image-size" src="https://g.foolcdn.com/editorial/images/578933/square01.jpg"/>
                    <h5 className="card-title mt-2">{props.event.name || "Bob"} {props.event.date || "NA"}</h5>
                   
                    <Link to={url} className="btn btn-primary">
                        Go somewhere </Link>
                    <button type="button" className="btn btn-danger ml-1" onClick={handleDelete} >Delete Me</button>
                </div>
            </div>
        </>
    )
}
export default EventCard