import React, { useState, useEffect } from 'react';
import Authentication from "../auth/Authenticaion";
import UserHeader from "../components/Header/UserHeader"
import { Container } from '@material-ui/core'
import { withStyles } from "@material-ui/core";
import JumbotronContact from "../components/Jumbotron/JumbotronContact";
import "./pages.css/pages.css"
import ToolBar from "@material-ui/core/Toolbar";
import Zoom from "../components/ScrollUp/Zoom";
import contactServices from "../services/contactService";
import ContactEventCard from "../components/Cards/ContactEventsCard";
import ModalAddButton from "../components/Form/ModalAddButton";
import ContactEventsForm from "../components/Form/ContactEventsForm";
import interestService from "../services/interestService";


const ContactPage = (props) => {
    const ToolBarZero = withStyles({
        margin: 0,
        padding: 0
    })(ToolBar)
    const [contacts, setContact] = useState({
        contacts: {},
        events: [],
        interests:[]
    })


    const getContact = async () => {
        let res = await contactServices.getContact(props.match.params.id);
        let interests = await interestService.getInterests(props.match.params.id)
        console.log("res", res)
        await setContact((prevState) => {
            return {
                ...prevState,
                contacts: res,
                interests
            }
        })
        return;
    }
    const getContactsEvents = async () => {
        let res = await contactServices.getContactEvents(props.match.params.id)
        console.log(res);
        setContact((prevState) =>{ 
          return { ...prevState, 
            events: res.map((event) => <ContactEventCard event={event.event}/>)
        } 
        })
    }
    useEffect(() => {
        getContact();
        getContactsEvents();
    }, [])
    return (
        <>
            <div className="page-center body">
                <ToolBarZero id="back-to-top-anchor">   <UserHeader /></ToolBarZero>
                <JumbotronContact
                    contact={contacts.contacts}
                    getContact={getContact}
                    firstname={contacts.contacts.firstname}
                    lastname={contacts.contacts.lastname}
                    address={contacts.contacts.address}
                    phone={contacts.contacts.phone}
                    link0="/dashboard"
                    name0="Dashboard"
                    link1="/events"
                    name1="Events"
                    link2="/buckets"
                    name2="Buckets" />
                <ToolBar />
                <ModalAddButton form={<ContactEventsForm id={props.match.params.id} getContactsEvents={getContactsEvents}/>}/>
    
                <div className="bottom-section container-body">

                    <Container fluid={true}  >
                        <div className="container-background flex-events">
                            {contacts.events.lenght <= 0 ? "Less Than" : contacts.events}
                        </div>

                    </Container>
                    <Zoom />
                </div>

            </div>

        </>
    )
}
export default Authentication(ContactPage);