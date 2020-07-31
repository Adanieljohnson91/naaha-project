

export default {
    searchInterest(interest){
        return fetch(`https://api.rainforestapi.com/request?api_key=F86A635AB02045208DBC81D5B0504214&type=search&amazon_domain=amazon.com&search_term=${interest}`)
        .then(res=>res.json)
        .then(res=>res)
    }
}