const env = require('dotenv').config({path: './.env'});
const cron = require('node-cron');
const dateFormat = require('dateformat');

let {TWILIO_ACCOUNT_SID,  TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER}= env.parsed;
const client = require('twilio')(
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN
  );

  class Cron {
    setSchedule = (se = '*', mi = '*', hr = '*', dmo = '*', mo = '*', da = '*', message) =>{
  
        cron.schedule(`${se} ${mi} ${hr} ${dmo} ${mo} ${da}`, ()=>{
        let now = new Date();
           console.log( dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"), message)
        })
      }
  }

// const setSchedule = (se = '*', mi = '*', hr = '*', dmo = '*', mo = '*', da = '*', func) =>{
  
//     cron.schedule(`${se} ${mi} ${hr} ${dmo} ${mo} ${da}`, func)
//   }


//   setSchedule('0-5', undefined, undefined, undefined, undefined, undefined, cronFunc);
//   cron.schedule('* * * July Tuesday', ()=>{
    
//     console.log("Workin 1, 2, 3")
//     client.messages
//     .create({
//       from: TWILIO_PHONE_NUMBER,
//       to: 4242490863,
//       body: "Hello World"
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err, "ERROR");
//     });
   
//   })

//   const cronFunc = () =>{
//     let now = new Date();
//     console.log( dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"))
//   }
 
  module.exports = new Cron();
  