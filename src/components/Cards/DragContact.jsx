import React from 'react';

const DragContact = () =>{
    const dragStartHandler = (e) =>{
      //  e.preventDefault();
        let data = {
            "userId":1
        }
        //move and link also valid drop effects
        e.dataTransfer.dropEffect = "move";

        e.dataTransfer.setData("text", JSON.stringify(data));
    }
    


    return (
        <>
            <div  className="card-shadows drop-zone" draggable={true} onDragStart={dragStartHandler}>
            <div className="card">
  <img className="card-img-top" src="https://media-exp1.licdn.com/dms/image/C560BAQG-vLQJr3J3zg/company-logo_200_200/0?e=2159024400&v=beta&t=cXNxHCDmX7A_e_LGk75XIbL-eVc7VYdHQfSFH39r3Qo" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      This is a longer card with supporting text below as a natural lead-in to
      additional content.
    </p>
    <p className="card-text">
      <small className="text-muted">Last updated 3 mins ago</small>
    </p>
  </div>
</div>
            </div>
        </>
    )
}

export default DragContact