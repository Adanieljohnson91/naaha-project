import React, {useState, useEffect} from 'react';
import Authentication from "../auth/Authenticaion";
import UserHeader from "../components/Header/UserHeader"
import { Container } from '@material-ui/core'
import { withStyles } from "@material-ui/core";
import "./pages.css/pages.css"
import ToolBar from "@material-ui/core/Toolbar";
import Zoom from "../components/ScrollUp/Zoom";
import eventServices from "../services/eventService";
import JumbotronEvent from '../components/Jumbotron/JumbotronEvent';


const EventPage = (props) => {
    const ToolBarZero = withStyles({
        margin: 0,
        padding: 0
    })(ToolBar)
    const [event, setEvent] = useState({
        event:{}
    })


    const getEvent = async () =>{
     let res = await eventServices.getEvent(props.match.params.id);
     console.log(res)
     await setEvent({...event, event: res})
       return;
    }
    useEffect(()=>{
        getEvent();
    }, [])
    return (
        <>
            <div className="page-center">
                <ToolBarZero id="back-to-top-anchor">   <UserHeader/></ToolBarZero>
                <JumbotronEvent 
                getEvent={getEvent}
                event={event.event}
                name={event.event.name} 
                lastname={event.event.date}
                link0="/dashboard"
                name0="Dashboard"
                link1="/events"
                name1="Events"
                link2="/buckets"
                name2="Buckets"/>
                    <ToolBar />
                <h1>Events</h1>
                <div className="bottom-section">
                    
                    <Container fluid={true}  >
                        <div className="container-background flex-events">
                          {/* {contacts.contacts}   */}
                        </div>

                    </Container>
                    <Zoom />
                </div>

            </div>

        </>
    )
}
export default Authentication(EventPage);