import React from 'react';
import eventService from "../../services/eventService";

const DropZone = (props) => {
  const onDragOver = (e) => {
    let event = e;
    event.stopPropagation();
    event.preventDefault();
  }
  const drop = async (e) => {
    e.preventDefault();
    let data = JSON.parse(e.dataTransfer.getData('text'));
    data.event = props.event;
    let res = await eventService.addEvent({
      name: props.event.name,
      userId: JSON.parse(window.sessionStorage.credentials).id,
      date: props.event.date
    })
    await eventService.contactEvent({ contactId: Number(data.id), eventId: Number(res.id) })
    console.log(data);
    console.log("DROPPED")
    props.shift();

  }


  return (
    <>
      <div onDragOver={onDragOver} onDrop={drop} className="drop-zone stack2">
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