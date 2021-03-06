
const URL = "https://naahaapi.herokuapp.com/events";
const response = res=>res.json();
const responseSuccess = res=>res;
const errorResponse = err=>console.log(err);

export default {
    addEvent(data){
        return fetch(`${URL}`, {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response)
        .then(responseSuccess)
        .catch(errorResponse)
    },
    getEvents(id){
        return fetch(`${URL}?userId=${id}`)
        .then(response)
        .then(responseSuccess)
        .catch(errorResponse)
    },
    deleteEvent(id){
        return fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers:{
                "Contact-Type" : "application/json"
            }
        })
        .then(response)
        .then(responseSuccess)
        .catch(errorResponse)   
    },
    getEvent(id){
        return fetch(`${URL}/${id}`)
        .then(response)
        .then(responseSuccess)
        .catch(errorResponse)
    },
    updateEvent(data, id){
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response)
        .then(responseSuccess)
        .catch(errorResponse)
    },
    contactEvent(data){
        return fetch(`https://naahaapi.herokuapp.com/contactEvent`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
    },
    getDefaultEvents(){
        return fetch('https://naahaapi.herokuapp.com/defaultEvents')
        .then(response)
        .then(responseSuccess)
        .catch(errorResponse)
    }
}