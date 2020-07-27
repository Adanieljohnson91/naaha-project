import React from 'react';
import "./jumbotron.css"
import { Link } from "react-router-dom";

import ModalContactEditButton from "../Form/ModalContactEditButton";
import EditContactForm from "../Form/EditContactForm";

const JumbotronContact = (props) => {

    return (
        <>
            <div>
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
                    <img className="image-size" src="https://images.ctfassets.net/1wryd5vd9xez/4DxzhQY7WFsbtTkoYntq23/a4a04701649e92a929010a6a860b66bf/https___cdn-images-1.medium.com_max_2000_1_Y6l_FDhxOI1AhjL56dHh8g.jpeg" alt />
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