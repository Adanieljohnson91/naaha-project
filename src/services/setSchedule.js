import axios from 'axios';

export default {
    scheduleTask(data){
        let config = {
            url:"http://localhost:5003/get",
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }
        console.log(data, "axios config")
        axios(config)
        .then(res=>res)

    }
}