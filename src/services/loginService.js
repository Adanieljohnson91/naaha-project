const URL = 'http://localhost:5002/users';
const response = (res)=>res.json();
const responseSuccess = (res)=>res;

export default {
    searchUsers(search){
        return fetch(`${URL}?username_like=${search}`)
        .then(response)
        .then(responseSuccess)
    }
}