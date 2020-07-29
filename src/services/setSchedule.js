import axios from 'axios';

export default {
    scheduleTask(data){
        let config = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: data
        }
        axios(config)

    }
}