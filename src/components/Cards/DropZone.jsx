import React from 'react';

const DropZone = (props) =>{
    const onDragOver = (e) =>{
        let event = e ;
        event.stopPropagation();
        event.preventDefault();
    }
    const drop = e =>{
        e.preventDefault();
       let data = e.dataTransfer.getData('text');
       console.log("data", JSON.parse(data));
        console.log("DROPPED")
       
        // dataConverter(data);
        // function dataConverter(data){
        //     console.log(data);

        // }
    }
    

    return (
        <>
       <div onDragOver={onDragOver} onDrop={drop}>
       <div className="card">
  <img className="card-img-top" src="https://media-exp1.licdn.com/dms/image/C560BAQG-vLQJr3J3zg/company-logo_200_200/0?e=2159024400&v=beta&t=cXNxHCDmX7A_e_LGk75XIbL-eVc7VYdHQfSFH39r3Qo" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.event.name}</h5>
    <p className="card-text">
      {props.event.date}
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
export default DropZone;