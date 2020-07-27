const URL = "http://localhost:5002/users"
const response = (res)=>res.json();
const responseSuccess = (res)=>res;

export default {
    registerUser(data){
        return fetch(`${URL}`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(response)
        .then(responseSuccess);
    }
}