import React, { useState } from 'react';
import eventService from "../../services/eventService";

const ContactEventsForm = (props) => {

  const [form, setForm] = useState({
    name: "",
    userId: JSON.parse(window.sessionStorage.credentials).id,
    date: ""
  })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = async () => {
    let res = await eventService.addEvent(form)

    await eventService.contactEvent({
      contactId: Number(props.id),
      eventId: Number(res.id)
    });
    await props.getContactsEvents();
    props.handleClose();
  }


  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="firstname">Event Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            placeholder="Events"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Special Occasion? Birthday? Anniversery
    </small>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
  </button>
      </form>
    </>
  )
}

export default ContactEventsForm