import React from 'react';
import "./jumbotron.css"
import { Link } from "react-router-dom";

const Jumbotron = (props) => {

    return (
        <>
            <div className="text">
                Copy
  <div className="jumbotron-custom background-image-jumbo" >
                    <p className="lead move-links-up">
                        <Link to={props.link0} className="btn btn-dark btn-lg ml-1 mr-1 w-25" href="#" role="button">
    {props.name0}</Link>
                            <Link to={props.link1} className="btn btn-dark btn-lg ml-1 mr-1 w-25" href="#" role="button">
                            {props.name1}</Link>
                            <Link to={props.link2} className="btn btn-dark btn-lg ml-1 mr-1 w-25" href="#" role="button">
                            {props.name2}</Link>
                    </p>
    <h1 className="display-4">{props.name}</h1>
                    <p className="lead">
                        Welcome {props.user}  </p>
                    <hr className="my-4" />
                    <p>
                        {props.purpose}</p>
                    
                </div>
            </div>
        </>
    )
}
export default Jumbotron;