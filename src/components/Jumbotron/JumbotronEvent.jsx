import React from 'react';
import "./jumbotron.css"
import { Link } from "react-router-dom";
import ModalEventEditButton from "../Form/ModalEventEditButton";
import EditEventForm from "../Form/EditEventForm";
import eventService from "../../services/eventService"

const JumbotronEvent = (props) => {
    const onDelete = () =>{
        eventService.deleteEvent(props.event.id);
       
    }
 
    return (
        <>
          
  <div className="jumbotron-custom background-image-jumbo" >

                  
                    <img className="image-size" src="https://g.foolcdn.com/editorial/images/578933/square01.jpg" alt />
                    <h1 className="display-4 text">{props.name}</h1>
                    
                    <hr className="my-4" />
                    <h2>
                        {props.date}</h2>
             <ModalEventEditButton form={<EditEventForm event={props.event} getEvent={props.getEvent} />}/><Link className="btn btn-danger" to="/events" onClick={onDelete}>Delete</Link>
                </div>
                
        
        </>
    )
}
export default JumbotronEvent;