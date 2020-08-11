import React, { useState } from 'react';
import contactService from "../../services/contactService";
import "./form.css";


const ContactForm = (props) => {
  const [selectedImages, setSelectedImages] = useState("");
  const [imageLoading, setIsImageLoading] = useState(false)
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    userId: JSON.parse(window.sessionStorage.credentials).id,
    image:"",
    setup: false
  })
  const handleChange = (e) => {
   let {name, value} = e.target;
    setForm((prevState)=>{ 
      return {
        ...prevState, 
        [name]: value}
     })
  }
  const handleSubmit = async () => {
    await contactService.addContact(form)
    await props.getContacts();
    props.handleClose();
  }

  const handleFileSelected = async (e) => {
    const files = e.target.files
    setIsImageLoading(true)
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'naahapreset')
    const res = await fetch('https://api.cloudinary.com/v1_1/naaha/image/upload', {
      method: "POST",
      body: data
    })
    const file = await res.json()
    // const currentStateCopy = [...selectedImages]
    // currentStateCopy.push(file.secure_url)
    setSelectedImages(file.secure_url)
    setForm({...form, image:file.secure_url})
    setIsImageLoading(false)
  }

  return (
    <>
      <form>
        <div className="form-group">
          <img className="form-img" src={imageLoading ? selectedImages : selectedImages} alt=""/>
          <input  type="file" name="image" id="image" accept="image/*" onChange={handleFileSelected} />
          <label htmlFor="firstname">Firstname</label>
          <br/>
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

export default ContactForm;