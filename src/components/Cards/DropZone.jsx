import React, { useState } from 'react';
import eventService from "../../services/eventService";

const DropZone = (props) => {
  const [state, setState] =useState({
    name:props.event.name,
    userId:JSON.parse(window.sessionStorage.credentials).id,
    date:props.event.date
  })
  const onDragOver = (e) => {
    let event = e;
    event.stopPropagation();
    event.preventDefault();
  }
  const drop = async (e) => {
    e.preventDefault();
    let data = JSON.parse(e.dataTransfer.getData('text'));
    data.event = props.event;
    let res = await eventService.addEvent(state)
    await eventService.contactEvent({ contactId: Number(data.id), eventId: Number(res.id) })
    props.shift();

  }
  const onChangeHandler = (e) =>{
    setState({...state, [e.target.name]: e.target.value})
  }


  return (
    <>
      <div onDragOver={onDragOver} onDrop={drop} className="drop-zone stack2 m-2">
        <div className="">
          <img className=" dnd-img" src="https://media-exp1.licdn.com/dms/image/C560BAQG-vLQJr3J3zg/company-logo_200_200/0?e=2159024400&v=beta&t=cXNxHCDmX7A_e_LGk75XIbL-eVc7VYdHQfSFH39r3Qo" alt="Card image cap" />
          <div className="center-card">
            <input value={state.name} onChange={onChangeHandler} name="name" className="card-title" />
            <input value={state.date} onChange={onChangeHandler} type="date" name="date" className="card-text"/>
            <p className="card-text">
              <button type="button" className="btn btn-dark m-1 mb-5" onClick={props.skip}>Skip</button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default DropZone;