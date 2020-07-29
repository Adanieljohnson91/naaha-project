const env = require('dotenv').config({path: './.env'});
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');
const app = express();
const dateFormat = require('dateformat');
const schedule = require("./resources/cron.js")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(cors());

// let {TWILIO_ACCOUNT_SID,  TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER}= env.parsed;

// const client = require('twilio')(
//     TWILIO_ACCOUNT_SID,
//     TWILIO_AUTH_TOKEN
//   );

// const cronFunc = () =>{
//   let now = new Date();
//   console.log( dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"))
// }

app.post('/get', (req,res)=>{
  res.send(req.body);
  console.log(req)
  schedule.setSchedule("1-7", undefined, "4-23", undefined, undefined, undefined, "Testing" )
})

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });
// app.post('/api/messages', (req,res)=>{
//     res.header('Content-Type', 'application/json');
//     client.messages
//     .create({
//       from: TWILIO_PHONE_NUMBER,
//       to: req.body.to,
//       body: req.body.body
//     })
//     .then(() => {
//       res.send(JSON.stringify({ success: true }));
//     })
//     .catch(err => {
//       console.log(err, "ERROR");
//       res.send(JSON.stringify({ success: false }));
//     });
// })

app.listen(5003, () =>
  console.log('Express server is running on localhost:3001')
);