import React, { useState, useEffect } from 'react';
import Authentication from "../auth/Authenticaion";
import UserHeader from "../components/Header/UserHeader"
import { withStyles } from "@material-ui/core";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import "./pages.css/pages.css"
import ToolBar from "@material-ui/core/Toolbar";
import Zoom from "../components/ScrollUp/Zoom";
import contactService from "../services/contactService";
import eventService from "../services/eventService";
import DropZone from "../components/Cards/DropZone";
import DragContact from "../components/Cards/DragContact";
import "../components/Cards/cards.css";


const Buckets = () => {
    const id = JSON.parse(window.sessionStorage.credentials).id
    let j;
    const ToolBarZero = withStyles({
        margin: 0,
        padding: 0
    })(ToolBar)
    const [state, setState] = useState({
        contacts: [],
        events: [],
        drag: [],
        drop: [],
        default: []
    })
    const getContacts = async () => {
        let result = await contactService.getContacts(id);
        let ev = await eventService.getDefaultEvents();


        for (let i = 0; i < result.length; i++) {
            let arr = await eventsSorter(result[i], ev);

            result[i].events = arr;
        }
        console.log(result, "RESULT")
        result = await checkEvents(result)
        j = result.length - 1;
        console.log(result, "result")
        if (result.length === 0) return;
        setState((prevState) => {
            return {
                ...prevState,
                contacts: result,
                default: ev,
                events: result[j].events,
                drag: result.map(contact => <DragContact key={contact.id} contact={contact} />),
                drop: result[j].events.map(event => <DropZone key={event.id} event={event} shift={shiftEvents} />)
            }
        })
    }
    const checkEvents = (result) => {
        let arr = []
        for (let i = result.length - 1; i >= 0; i--) {
            if (result[i].events.length !== 0) {
                arr.push(result[i])
            }
        }
        return arr;
    }
    // RETURNING AN OBJECT HOLDING Contacts Events
    const createEventsObject = async (contact) => {
        let result = await contactService.getContactEvents(contact.id)
        let events = {}
        for (let i = 0; i < result.length; i++) {
            console.log(result[i].event.name)
            events[result[i].event.name] = true;
        }
        return events;
    }
    //COMPARES CONTACTS EVENT OBJECT WITH ALL EVENTS; PUSHES BACK ARRAY OF UNASSIGNED EVENTS
    const eventsSorter = async (contact, events) => {
        //Getting current Contacts events
        let obj = await createEventsObject(contact)
        let arr = []
        console.log(obj, events)
        for (let i = 0; i < events.length; i++) {
            if (obj[events[i].name] === undefined) {
                arr.push(events[i])
            }
        }
        return arr;
    }
    //ON DROP EVENTS ARE SHIFTED, ONCE THE LAST ONE HAS BEEN ASSIGNED NEXT CONTACT APPEARS
    const shiftEvents = () => {

        setState((prevState) => {
            if (prevState.contacts.events === undefined) {
                if (prevState.events.length <= 1) {
                    j--;
                    console.log(prevState)
                    prevState.contacts.pop();
                    if (prevState.contacts.length === 0)return;
                    console.log("Zero Events");
                    return {
                        ...prevState,
                        contacts: prevState.contacts,
                        events: prevState.contacts[j].events,
                        drag: prevState.contacts.map(contact => <DragContact key={contact.id} contact={contact} />),
                        drop: prevState.contacts[j].events.map(event => <DropZone key={event.id} event={event} shift={shiftEvents} />)
                    }
                } else {
                    console.log(prevState, "EVENTS", prevState.events)
                    prevState.events.pop();
                    return {
                        ...prevState,
                        drop: prevState.events.map(event => <DropZone key={event.id} event={event} shift={shiftEvents} />)
                    }
                }
            }
            return;
        })
    }
    useEffect(() => {
        getContacts();
    }, [])

    return (
        <>
            <div className="page-center body">
                <ToolBarZero id="back-to-top-anchor">   <UserHeader /></ToolBarZero>
                <Jumbotron
                    name="Buckets"
                    user="Anthony"
                    purpose="Drag and Drop Contacts, Create Events "
                    link0="/dashboard"
                    name0="Dashboard"
                    link1="/events"
                    name1="Events"
                    link2="/contacts"
                    name2="Contacts" />
                <ToolBar />


                <div className="container-background flex-events bucket">
                    <div className="position stack">
                        {state !== undefined ? state.drop : "NUll"}
                    </div>
                    <div className="position stack2">
                        {state !== undefined ? state.drag : "Null"}
                    </div>


                    <Zoom />
                </div>
            </div>
        </>
    )
}
export default Authentication(Buckets);