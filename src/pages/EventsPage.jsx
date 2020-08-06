import React, {useState, useEffect} from 'react';
import Authentication from "../auth/Authenticaion";
import UserHeader from "../components/Header/UserHeader"
import { Container } from '@material-ui/core'
import { withStyles } from "@material-ui/core";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import "./pages.css/pages.css"
import ToolBar from "@material-ui/core/Toolbar";
import Zoom from "../components/ScrollUp/Zoom";
import ModalAddButton from '../components/Form/ModalAddButton';
import EventsForm from "../components/Form/EventsForm";
import EventCards from '../components/Cards/DashBoardEventCard';
import eventServices from "../services/eventService";
const EventsPage = () => {
    const id = JSON.parse(window.sessionStorage.credentials).id
    const ToolBarZero = withStyles({
        margin: 0,
        padding: 0
    })(ToolBar);
    const [events, setEvents] = useState({
        events:[]
    })


    const getEvents = async () =>{
        let res = await eventServices.getEvents(id);
        setEvents({...events, events: res.map(e=><EventCards event={e} getEvents={getEvents}/>)})
    }
    useEffect(()=>{
        getEvents();
    }, [])

    return (
        <>
            <div className="page-center body">
                <ToolBarZero id="back-to-top-anchor">   <UserHeader /></ToolBarZero>

                <Jumbotron
                    name="Events"
                    user="Anthony"
                    purpose="Add or Edit your events below"
                    link0="/dashboard"
                    name0="Dashboard"
                    link1="/contacts"
                    name1="Contacts"
                    link2="/buckets"
                    name2="Buckets" />


                <ToolBar />
                <ModalAddButton form={<EventsForm getEvents={getEvents}/>} />
                <div className="bottom-section container-body">
                    <Container fluid={true}  >
                        <div className="container-background flex-events">
                           {events.events}
                        </div>

                    </Container>
                    <Zoom />
                </div>

            </div>

        </>
    )
}
export default Authentication(EventsPage);