import React from 'react';
import "./jumbotron.css"
import { Link } from "react-router-dom";

import ModalContactEditButton from "../Form/ModalContactEditButton";
import EditContactForm from "../Form/EditContactForm";

const JumbotronContact = (props) => {

    return (
        <>
            <div className="text">
              
  <div className="jumbotron-custom background-image-jumbo" >

                    <img className="image-size" src="https://g.foolcdn.com/editorial/images/578933/square01.jpg" alt />
                    <h1 className="display-4">{props.firstname} {props.lastname}</h1>
                    
                    <hr className="my-4" />
                    <h2>
                        {props.phone}</h2>
                    <h2>
                        {props.address}</h2>
                        
                        <ModalContactEditButton form={<EditContactForm contact={props.contact} getContact={props.getContact} />}/><button>Delete</button>
        
                </div>
                
            </div>
        </>
    )
}
export default JumbotronContact;