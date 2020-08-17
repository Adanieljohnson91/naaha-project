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
import ContactFrom from "../components/Form/ContactForm";
import contactServices from "../services/contactService";
import ContactCard from "../components/Cards/DashBoardContactCard";


const Contacts = () => {
    const id = JSON.parse(window.sessionStorage.credentials).id
    const ToolBarZero = withStyles({
        margin: 0,
        padding: 0
    })(ToolBar)
    const [contacts, setEvents] = useState({
        contacts:[]
    })


    const getContacts = async () =>{
        let res = await contactServices.getContacts(id);
       await setEvents({...contacts, contacts: res.map(e=><ContactCard contact={e} getContacts={getContacts}/>)})
       return;
    }
    useEffect(()=>{
        getContacts();
    }, [])
    return (
        <>
            <div className="page-center body">
                <ToolBarZero id="back-to-top-anchor">   <UserHeader/></ToolBarZero>
                <Jumbotron 
                name="Contacts" 
                purpose="Add or Edit your contacts below"  
                link0="/dashboard"
                name0="Dashboard"
                link1="/events"
                name1="Events"
                link2="/buckets"
                name2="Buckets"/>
                <ToolBar />
                <ModalAddButton form={<ContactFrom getContacts={getContacts}/>} />
                <div className="bottom-section container-body">
                    <Container className="container-body" fluid={true}  >
                        <div className="container-background flex-events ">
                          {contacts.contacts}  
                        </div>
                    </Container>
                    <Zoom />
                </div>
            </div>
        </>
    )
}
export default Authentication(Contacts);