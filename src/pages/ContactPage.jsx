import React, {useState, useEffect} from 'react';
import Authentication from "../auth/Authenticaion";
import UserHeader from "../components/Header/UserHeader"
import { Container } from '@material-ui/core'
import { withStyles } from "@material-ui/core";
import JumbotronContact from "../components/Jumbotron/JumbotronContact";
import "./pages.css/pages.css"
import ToolBar from "@material-ui/core/Toolbar";
import Zoom from "../components/ScrollUp/Zoom";
import contactServices from "../services/contactService";


const ContactPage = (props) => {
    const ToolBarZero = withStyles({
        margin: 0,
        padding: 0
    })(ToolBar)
    const [contacts, setContact] = useState({
        contacts:{}
    })


    const getContact = async () =>{
     let res = await contactServices.getContact(props.match.params.id);
     await setContact({...contacts, contacts: res})
       return;
    }
    useEffect(()=>{
        getContact();
    }, [])
    return (
        <>
            <div className="page-center">
                <ToolBarZero id="back-to-top-anchor">   <UserHeader/></ToolBarZero>
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
export default Authentication(ContactPage);