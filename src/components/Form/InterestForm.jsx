import React, {useState} from 'react';
import interestService from "../../services/interestService";

const InterestForm = (props) =>{

    const [form, setForm] = useState({
        name:"",
        contactId: props.id
    })
    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }
     const handleSubmit = async () =>{
      await interestService.addInterest(form)
      await props.getInterests();
      
      props.handleClose();
    }


    return (
        <>
                <form>
  <div className="form-group">
    <label htmlFor="firstname">Interest</label>
    <input
      type="text"
      className="form-control"
      id="name"
      name="name"
      value={form.name}
      placeholder="Interest"
      onChange={handleChange}
    />
    <small id="emailHelp" className="form-text text-muted">
     Special Occasion? Birthday? Anniversery
    </small>
  </div>
  <button type="button" className="btn btn-primary" onClick={handleSubmit}>
    Submit
  </button>
</form>
        </>
    )
}

export default InterestForm