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
import { Pagination } from "@material-ui/lab";
import InterestSelect from "../components/Interests/InterestSelect";
import amazonAPI from "../services/amazonAPI";
import AmazonProductCards from "../components/Cards/amazonProductCards";
import InterestForm from '../components/Form/InterestForm';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const ContactPage = (props) => {
    const classes = useStyles();
    const ToolBarZero = withStyles({
        margin: 0,
        padding: 0
    })(ToolBar)
    const [contacts, setContact] = useState({
        contacts: {},
        events: [],
        interests: [],
        currentInterest: "",
        page: 1,
        amazonCards: []
    })
    const [loaded, isLoading] = useState(false);


    const getContact = async () => {
        let res = await contactServices.getContact(props.match.params.id);
        let res2 = await interestService.getInterests(props.match.params.id)
        console.log("RES2", res2)
        await setContact((prevState) => {
            return {
                ...prevState,
                contacts: res,
                interests: res2
            }
        })
        return;
    }
    const getContactsEvents = async () => {
        let res = await contactServices.getContactEvents(props.match.params.id)
        if(!Array.isArray(res))return;
        setContact((prevState) => {
            return {
                ...prevState,
                events: res.map((event) => <ContactEventCard event={event.event} />)
            }
        })
    }
    const getInterests = async () => {
        let res = await interestService.getInterests(props.match.params.id)
        setContact((prevState) => {
            return { ...prevState, interests: res }

        })
    }
    const changeCurrentInterest = (currentInterest) => {
        setContact({ ...contacts, currentInterest })
    }
    const getAmazonCards = async () => {
        let res = await amazonAPI.searchInterest(contacts.currentInterest, contacts.page)
        if(!Array.isArray(res))return;
        setContact((prevState) => {
            return {
                ...prevState,
                amazonCards: res.search_results.map(product => <AmazonProductCards key={product.position} product={product} />)
            }
        })
        console.log("ENDED")
    }
    const pagination = (e, page) => {
        setContact((prevState) => {
            return {
                ...prevState,
                page
            }
        })
        getAmazonCards();
    }




    useEffect(() => {
        getInterests();
        getContact();
        getContactsEvents();

    }, [])
    useEffect(() => {
        if (loaded) getAmazonCards();
        isLoading(true);
    }, [contacts.currentInterest])
    useEffect(() => {
        if (loaded) getAmazonCards();

    }, [contacts.count])

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
                <ModalAddButton form={<ContactEventsForm id={props.match.params.id} getContactsEvents={getContactsEvents} />} />

                <div className="bottom-section container-body">

                    <Container fluid={true}  >
                        <div className="container-background flex-events">
                            {contacts.events.lenght <= 0 ? "Less Than" : contacts.events}
                        </div>

                    </Container>
                </div>
                <Zoom />
                 <ModalAddButton className="m-1" form={<InterestForm id={props.match.params.id} getInterests={getInterests} />} />
                <div className="center-interests">
               
                    <InterestSelect contact={contacts.contact} interests={contacts.interests} change={changeCurrentInterest} />
                    <Pagination className="center-pagination" onChange={pagination} count={5} />
                    <div className="product-card-wrap">
                        {contacts.amazonCards.length > 0 ? contacts.amazonCards :  <div className={classes.root}>
      <LinearProgress />
    </div>}
                    </div>
                    <Pagination className="center-pagination" page={contacts.page} count={5} />
                </div>

            </div>

        </>
    )
}
export default Authentication(ContactPage);