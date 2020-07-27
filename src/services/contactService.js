
const URL = 'http://localhost:5002/contacts';
const response = (res)=>res.json();
const responseSuccess = (res)=>res;
const errorResponse = err=>console.log(err)

export default {
    addContact(data){
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
    getContacts(id){
        return fetch(`${URL}?userId=${id}`)
        .then(response)
        .then(responseSuccess)
        .catch(errorResponse)
    },
    deleteContact(id){
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
    getContact(id){
        return fetch(`${URL}/${id}`)
        .then(response)
        .then(responseSuccess)
        .catch(errorResponse) 
    },
    updateContact(data, id){
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
    }
}