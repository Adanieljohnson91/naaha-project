import React, { useState } from 'react';
import twilio from "../../services/setSchedule";

const ScheduleButton = (props) => {
    const [object, setObject] = useState({
        message: "",
        date: ""
    })

    const changeHandler = (e) => {
        setObject({ ...object, [e.target.name]: e.target.value })
    }
    const submitHandler = () => {
        twilio.scheduleTask(object)
        console.log(object, "object")
    }

    return (
        <>
            <form>
                <input type="text" value={object.message} name="message" onChange={changeHandler} />
                <input type="date" name="date" onChange={changeHandler} />
                <button type="button" onClick={submitHandler}>Schedule</button>
            </form>
        </>
    )
}
export default ScheduleButton;