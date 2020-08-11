import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm';
import RegisterForm from "../components/Register/RegisterForm";
import Header from '../components/Header/Header';
import {withRouter} from "react-router-dom";
import "../components/Login/login.css";


const LoginPage = (props) =>{
    const [form, setForm] = useState(true);
    const switchViews = () =>{
        setForm(!form);
    }

    return (
        <>
            <Header/>
            <div className="background full-screen" />
            {form ? <LoginForm {...props} switch={switchViews}/> : <RegisterForm switch={switchViews}/>}
        </>
    )
}
export default withRouter(LoginPage);