import React, { useState, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core';
const InterestSelect = (props) => {
    const [options, setOptions] = useState({
        options: []
    })

    const mapSelect = () => {
        console.log(props.interests, "INTERESTS!!!")
        setOptions({
            options: props.interests.map(interest => {
                return (
                    <MenuItem value={interest.name}>{interest.name}</MenuItem>
                )
            })

        })
    }
    const onChange = (e) =>{
        props.change(e.target.value)
    }
    useEffect(() => { 
           mapSelect(); 
    }, [props.interests]) 

    return (
        <>
            <Select onChange={onChange} labelId="label" id="select" value="Select">
                {options.options ? options.options : options.options}
            </Select>
        </>
    )
}

export default InterestSelect;