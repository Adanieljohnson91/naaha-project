import React, {useState, useEffect} from 'react';
import Authentication from "../auth/Authenticaion";
import UserHeader from "../components/Header/UserHeader"
import { withStyles } from "@material-ui/core";
import "./pages.css/pages.css"
import ToolBar from "@material-ui/core/Toolbar";
import eventServices from "../services/eventService";
import JumbotronEvent from '../components/Jumbotron/JumbotronEvent';
import amazonAPI from "../services/amazonAPI";
import AmazonProductCards from "../components/Cards/amazonProductCards";

const EventPage = (props) => {
    const ToolBarZero = withStyles({
        margin: 0,
        padding: 0
    })(ToolBar)
    const [event, setEvent] = useState({
        event:{},
        amazonCards:[]
    })
    const [loaded, isLoaded] = useState(false)


    const getEvent = async () =>{
     let res = await eventServices.getEvent(props.match.params.id);
     console.log(res)
     await setEvent({...event, event: res})
       return;
    }
    const getAmazonCards = async () => {
        let res = await amazonAPI.searchInterest(event.event.name, 1)
        console.log(res)
        setEvent((prevState) => {
            return {
                ...prevState,
                amazonCards: res.search_results.map(product => <AmazonProductCards key={product.position} product={product} />)
            }
        })
        console.log("ENDED")
    }
    useEffect(()=>{
        getEvent();
       isLoaded(true)
    }, [])
    // useEffect(()=>{
    //     if(event.event.name === undefined) return;
    //     getAmazonCards();
    // }, [event.event])
    return (
        <>
            <div className="page-center ">
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
               <div className="center-interests">
               <div className="product-card-wrap">
                   {/* {event.amazonCards.length > 0 ? event.amazonCards : "null"} */}
               </div>
</div>
            </div>

        </>
    )
}
export default Authentication(EventPage);