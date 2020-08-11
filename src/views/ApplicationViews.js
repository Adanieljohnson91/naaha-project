import React from 'react';
import { Route } from 'react-router-dom';
import BucketsPage from "../pages/BucketsPage"
import LoginPage from "../pages/LoginPage"
import DashBoard from "../pages/DashBoard"
import EventsPage from "../pages/EventsPage"
import ContactsPage from "../pages/ContactsPage";
import ContactPage from "../pages/ContactPage";
import EventPage from "../pages/EventPage"


const ApplicationViews = () =>{
    return (
        <>
            <Route exact path="/" component={DashBoard}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/dashboard" component={DashBoard}/>
            <Route exact path="/contacts" component={ContactsPage}/>
            <Route exact path="/events" component={EventsPage}/>
            <Route exact path="/buckets" component={BucketsPage}/>
            <Route exact path="/contact/:id" component={ContactPage}/>
            <Route exact path="/event/:id" component={EventPage}/>
        </>
    )
}
export default ApplicationViews;