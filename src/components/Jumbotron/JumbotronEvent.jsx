import React from 'react';
import "./jumbotron.css"
import { Link } from "react-router-dom";
import ModalEventEditButton from "../Form/ModalEventEditButton";
import EditEventForm from "../Form/EditEventForm";

const JumbotronEvent = (props) => {

    return (
        <>
            <div className="text">
                Copy
  <div className="jumbotron-custom background-image-jumbo" >

                    <p className="lead move-links-up">
                        <Link to={props.link0} className="btn btn-primary btn-lg ml-1 mr-1 w-25" href="#" role="button">
                            {props.name0}</Link>
                        <Link to={props.link1} className="btn btn-primary btn-lg ml-1 mr-1 w-25" href="#" role="button">
                            {props.name1}</Link>
                        <Link to={props.link2} className="btn btn-primary btn-lg ml-1 mr-1 w-25" href="#" role="button">
                            {props.name2}</Link>
                    </p>
                    <img className="image-size" src="https://g.foolcdn.com/editorial/images/578933/square01.jpg" alt />
                    <h1 className="display-4">{props.name}</h1>
                    
                    <hr className="my-4" />
                    <h2>
                        {props.date}</h2>
             <ModalEventEditButton form={<EditEventForm event={props.event} getEvent={props.getEvent} />}/><button>Delete</button>
                </div>
                
            </div>
        </>
    )
}
export default JumbotronEvent;