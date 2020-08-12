import React, { useEffect, useState } from 'react';
import Authentication from "../auth/Authenticaion";
import UserHeader from "../components/Header/UserHeader"
import { Container } from '@material-ui/core'
import { withStyles } from "@material-ui/core";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import "./pages.css/pages.css"
import ToolBar from "@material-ui/core/Toolbar";
import Zoom from "../components/ScrollUp/Zoom";
import TabBox from "../components/Organizer/306090Days";
import eventService from '../services/eventService';
import EventCard from "../components/Cards/DashBoardEventCard";
import contactService from '../services/contactService';
import ContactCard from "../components/Cards/DashBoardContactCard";
import "../components/Organizer/organizer.css"
import Chart from "../components/Chart/Chart";
import Chart2 from "../components/Chart/Chart2";
//import ScheduleButton from '../components/TestComponents/ButtonSchedule';

const DashBoard = () => {
    const id = JSON.parse(window.sessionStorage.credentials).id
    const [state, setState] = useState({
        eventCards: [],
        contactCards: [],
        thirty: [],
        sixty: [],
        ninety: []
    })
    const username = JSON.parse(window.sessionStorage.credentials).full_name

    const getEvents = async () => {
        let res = await eventService.getEvents(id);
        if (res === undefined) return;
        let notRes = await sortEvents(res)
        setState((prevState) => {
            return {
                ...prevState,
                eventCards: res.map(event => <EventCard key={event.id} event={event} getEvents={getEvents} />),
                event: res,
                thirty: notRes[0].map(event => <EventCard className="rows" key={event.id} event={event} getEvents={getEvents} />),
                sixty: notRes[1].map(event => <EventCard key={event.id} event={event} getEvents={getEvents} />),
                ninety: notRes[2].map(event => <EventCard key={event.id} event={event} getEvents={getEvents} />)
            }
        })


    }


    const sortEvents = (events) => {
        if (events === undefined) return
        let [thirty, sixty, ninety] = [[], [], []];
        let date = new Date().toISOString().split('T')[0];
        console.log(date, "DATE")
        for (let i = 0; i < events.length; i++) {
            let diff = Math.round((new Date(events[i].date) - new Date(date)) / (1000 * 60 * 60 * 24))
            console.log(diff, "DIFFFFF")
            if (diff < 90 && diff > 60) {
                ninety.push(events[i])
            } else if (diff < 60 && diff > 30) {
                sixty.push(events[i])
            } else if (diff < 30) {
                thirty.push(events[i])
            }
        }
        console.log([thirty, sixty, ninety], "Thirty Sixty Ninety")
        return [thirty, sixty, ninety]
    }
    const getContacts = async () => {
        let res = await contactService.getContacts(id);
        console.log(res, "RESSSSS")
        if (res === undefined) return;
        setState((prevState) => {
            return {
                ...prevState, contactCards: res.map(event => <ContactCard key={event.id} contact={event} getContacts={getContacts} />)
            }

        })
    }
    useEffect(() => {
        getEvents();
        getContacts();
    }, [])

    const ContainerStyle = withStyles({
        root: {
            width: "100",
            display: "block",
            boxSizing: "border-box",
            marginRight: "auto",
            marginLeft: "0",
            paddingLeft: "16px",
            paddingRight: "16px",
        }
    })(Container);

    const ToolBarZero = withStyles({
        margin: 0,
        padding: 0
    })(ToolBar);
    return (
        <>
            <div className="page-center body">
                <ToolBarZero id="back-to-top-anchor">   <UserHeader /></ToolBarZero>

                <Jumbotron
                    name="Dashboard"
                    user={username || ""}
                    purpose="View your current contacts and upcoming events below"
                    link0="/contacts"
                    name0="Contacts"
                    link1="/events"
                    name1="Events"
                    link2="/buckets"
                    name2="Buckets" />
                    <div className="chart-size">
                    <div className="buckets">
                     {/* <Chart />  */}
                      <Chart2/>
                    </div></div>
                    
                <div className="top-section scrolling-wrapper container-body">

                    <ToolBar />
                    {/* <ScheduleButton/> */}
                    
                        <div className="card-custom scrolling-wrapper">
                            {state.contactCards}
                        </div>
                    
                </div>
                <div className="bottom-section">
                    <TabBox day30={state.thirty} day60={state.sixty} day90={state.ninety} />
                    <Zoom />
                </div>

            </div>

        </>
    )
}
export default Authentication(DashBoard);