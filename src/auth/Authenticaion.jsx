import React from 'react';
import { Redirect } from 'react-router-dom';

const Authentication = (Component) =>{
  const isLoggedIn = () =>{
      if(window.sessionStorage.credentials !== undefined){
          return true;
      }else{
          return false;
      }
  }
  return (props) =>{
      if(isLoggedIn()){
          return <Component {...props}/>
      }else{
          return <Redirect to="/login"/>
      }
  }
   
}

export default Authentication;