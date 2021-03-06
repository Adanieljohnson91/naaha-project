import React from 'react';
import "./jumbotron.css"

const Jumbotron = (props) => {

    return (
        <>
        
  <div className="jumbotron-custom background-image-jumbo" >
                 
    <h1 className="display-4">{props.name}</h1>
                    <p className="lead">
                      {props.user ?  `Welcome ${props.user}` : "" } </p>
                    <hr className="my-4" />
                    <p>
                        {props.purpose}</p>
                    
                </div>
           
        </>
    )
}
export default Jumbotron;