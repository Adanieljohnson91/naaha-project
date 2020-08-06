import React from 'react';

const DragContact = (props) =>{
    const dragStartHandler = (e) =>{
      console.log(props.contact);
      //  e.preventDefault();
        //move and link also valid drop effects
        e.dataTransfer.dropEffect = "move";

        e.dataTransfer.setData("text", JSON.stringify(props.contact));
    }
    


    return (
        <>
            <div  className="card-shadows drop-zone stack" draggable={true} onDragStart={dragStartHandler}>
            <div className="card">
  <img className="card-img-top" src="https://media-exp1.licdn.com/dms/image/C560BAQG-vLQJr3J3zg/company-logo_200_200/0?e=2159024400&v=beta&t=cXNxHCDmX7A_e_LGk75XIbL-eVc7VYdHQfSFH39r3Qo" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.contact.firstname}</h5>
  </div>
</div>
            </div>
        </>
    )
}

export default DragContact