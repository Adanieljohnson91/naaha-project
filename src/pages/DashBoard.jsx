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
//import ScheduleButton from '../components/TestComponents/ButtonSchedule';

const DashBoard = () => {
    const id = JSON.parse(window.sessionStorage.credentials).id
    const [state, setState] = useState({
        eventCards:[],
        contactCards:[]
    })


    const getEvents = async () =>{
        let res = await eventService.getEvents(id);
        setState((prevState)=>{
                        return{
                            ...prevState, 
                            eventCards: res.map(event=><EventCard key={event.id} event={event} getEvents={getEvents}/>)}
                    })
       
       
    }
    const getContacts = async() =>{ 
        let res = await contactService.getContacts(id);
        setState((prevState)=>{
           return{
                ...prevState, contactCards: res.map(event=><ContactCard key={event.id} contact={event} getContacts={getContacts}/>)
            }
        
        })
    }
    useEffect(()=>{
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
                user="Anthony" 
                purpose="View your current contacts and upcoming events below"
                link0="/contacts"
                name0="Contacts"
                link1="/events"
                name1="Events"
                link2="/buckets"
                name2="Buckets" />

                <div className="top-section scrolling-wrapper container-body">
                    <ToolBar />
                    {/* <ScheduleButton/> */}
                    <ContainerStyle fluid={true}  >
                        <div className="container-background card-padding ">

                            {state.contactCards}

                        </div>
                    </ContainerStyle>
                </div>
                <div className="bottom-section">
                                <TabBox day30={state.eventCards}/>
                    <Zoom />
                </div>

            </div>

        </>
    )
}
export default Authentication(DashBoard);