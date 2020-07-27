import React from 'react';
import { withRouter } from 'react-router-dom';
import ApplicationViews from "./views/ApplicationViews";

function App() {
 
  return (
    <>
     <ApplicationViews/>
    </>
  );
  
}

export default withRouter(App);
