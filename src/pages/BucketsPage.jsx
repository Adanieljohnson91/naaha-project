import React, {useState, useEffect} from 'react';
import Authentication from "../auth/Authenticaion";
import UserHeader from "../components/Header/UserHeader"
import { Container } from '@material-ui/core'
import { withStyles } from "@material-ui/core";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import "./pages.css/pages.css"
import ToolBar from "@material-ui/core/Toolbar";
import Zoom from "../components/ScrollUp/Zoom";
import contactService from "../services/contactService";
import eventService from "../services/eventService";
import DropZone from "../components/Cards/DropZone";
import DragContact from "../components/Cards/DragContact";


const Buckets = () => {
    const id = JSON.parse(window.sessionStorage.credentials).id
    const ToolBarZero = withStyles({
        margin: 0,
        padding: 0
    })(ToolBar)
    const [state, setState] = useState({
                contacts:[],
                events:[],
                drag:[],
                drop:[]
            })
            const getContacts = async () =>{
              let result = await contactService.getContacts(id);
              setState((prevState)=>{
                  return {
                      ...prevState,
                      contacts: result,
                      drag: result.map(contact=><DragContact contact={contact}/>)
                  }
              })
            }
            const getDefaultEvents = async () =>{
                let result = await eventService.getDefaultEvents();
                setState((prevState)=>{
                    return {
                        ...prevState,
                        events: result,
                        drop: result.map(event => <DropZone event={event}/>)
                    }
                })
            }
            useEffect(()=>{
                getContacts();
                getDefaultEvents();
            }, [])
        
    return (
        <>
            <div className="page-center body">
                <ToolBarZero id="back-to-top-anchor">   <UserHeader/></ToolBarZero>
                <Jumbotron 
                name="Buckets" 
                user="Anthony"
                purpose="Drag and Drop Contacts, Create Events "  
                link0="/dashboard"
                name0="Dashboard"
                link1="/events"
                name1="Events"
                link2="/contacts"
                name2="Contacts"/>
                <ToolBar />
        
                 
                        <div className="container-background flex-events top-section">
                       <div className="position">
                       {state.drop}    
                       </div>
                       <div className="position">
                         {state.drag}   
                       </div>
                 
                  
                    <Zoom />
                </div>
            </div>
        </>
    )
}
export default Authentication(Buckets);