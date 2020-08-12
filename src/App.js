import React from 'react';
import { withRouter } from 'react-router-dom';
import ApplicationViews from "./views/ApplicationViews";
import "./App.css"

function App() {
 
  return (
    <div className="dimentions">
     <ApplicationViews/>
     </div>
  );
  
}

export default withRouter(App);
