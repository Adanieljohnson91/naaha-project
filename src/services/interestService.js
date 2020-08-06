const URL = 'https://naahaapi.herokuapp.com/interest';
const response = res=>res.json();
const responseSuccess = res=>res;
const error = err=>console.log(err);

export default {
    getInterests(id){
        return fetch(`${URL}?contactId=${id}`)
        .then(response)
        .then(responseSuccess)
        .catch(error)
    },
    addInterest(data){
        return fetch(`${URL}`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response)
        .then(responseSuccess)
        .catch(error)
    }
}