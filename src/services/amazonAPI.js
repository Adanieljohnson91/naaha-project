

export default {
    searchInterest(interest, page){
        if(interest === undefined) return;
        return fetch(`https://api.rainforestapi.com/request?api_key=B82404A95F29492A8BABD51A98CFEFE5&type=search&amazon_domain=amazon.com&search_term=${interest}&page=${page}`)
        .then(res=>res.json())
        .then(res=>res)
    }
}