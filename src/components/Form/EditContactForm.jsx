import React, {useState} from 'react';
import contactService from "../../services/contactService";

const EditContactForm = (props) =>{

 const [form, setForm] = useState({
    firstname:props.contact.firstname,
    lastname:props.contact.lastname,
    phone:props.contact.phone,
    address:props.contact.address,
    userId: JSON.parse(window.sessionStorage.credentials).id
})
    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }
     const handleSubmit = async () =>{
      await  contactService.updateContact(form, props.contact.id)
      await props.getContact();
      props.handleClose();
    }


    return (
        <>
               <form>
  <div className="form-group">
    <label htmlFor="firstname">Firstname</label>
    <input
      type="text"
      className="form-control"
      id="firstname"
      name="firstname"
      value={form.firstname}
      placeholder="First Name"
      onChange={handleChange}
    />
    <small id="emailHelp" className="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>
  <div className="form-group">
    <label htmlFor="lastname">Lastname</label>
    <input
      type="text"
      className="form-control"
      id="lastname"
      name="lastname"
      value={form.lastname}
      placeholder="Last Name"
      onChange={handleChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="phone">Phone</label>
    <input
      type="text"
      className="form-control"
      name="phone"
      value={form.phone}
      id="phone"
      placeholder="Phone 1(123)-456-6789"
      onChange={handleChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="address">Address</label>
    <input
      type="text"
      className="form-control"
      id="address"
      name="address"
      value={form.address}
      placeholder="Address"
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

export default EditContactForm