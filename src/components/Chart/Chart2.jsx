import React, {useState, useEffect} from 'react';
import {Pie, Line} from 'react-chartjs-2';
import eventService from "../../services/eventService";



const Chart2 = () => {
    const id = JSON.parse(window.sessionStorage.credentials).id
    const [state, setState ]= useState({
        labels: ['Jan', 'Feb', 'Mar',
                 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Events',
            backgroundColor: [
              '#FF3933',
              '#FF7133',
              '#FFAF33',
              '#FFAF33',
              '#B2FF33',
              '#61FF33',
              '#33F3FF',
              '#3390FF',
              '#8A33FF',
              '#D733FF',
              '#FF33B5',
              '#33F9FF'
            ],
            hoverBackgroundColor: [
            '#33FF52',
            '#33FF52',
            '#33FF52',
            '#33FF52',
            '#33FF52',
            '#33FF52',
            '#33FF52',
            '#33FF52',
            '#33FF52',
            '#33FF52',
            '#33FF52'
            ],
            data: [65, 59, 80, 81, 56, 54, 21, 12, 84, 23, 20]
          }
        ]
      })
      const getEvents = async () =>{
       let res = await eventService.getEvents(id);
      let arr = sortEvents(res)
       setState((prevState)=>{
           return {
               ...prevState,
               ...prevState.datasets[0].data = arr
               
           }
       })
      }
      const sortEvents = (events) =>{
          let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0];
          let obj = {
              "01":0,
              "02":1,
              "03":2,
              "04":3,
              "05":4,
              "06":5,
              "07":6,
              "08":7,
              "09":8,
              "10":9,
              "11":10,
              "12":11
          }
          for(let i = 0; i < events.length; i++){
              let date = String(events[i].date.split('-')[1]);
                  arr[obj[date]] ? arr[obj[date]]++ : arr[obj[date]] = 1
                
              
          } 
           return arr;
      }

      useEffect(()=>{
        getEvents();
      }, [])
    return (
      <div className="chart2">
          <div className="flex">
      
</div>
<div className="flex align-content-between">
        <Line
          data={state}
          options={{
            layout: {
              padding: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0
              }
          },
            title:{
              display:true,
              text:'Events per month',
              fontSize:20,
              responsize:true,
              fontColor: 'white'
            },
            legend:{
              display:true,
              position:'right',
              fontSize:"small",
              color: '#33FF52'
            }
          }}
        />
        </div>
      </div>
    );
  
}

export default Chart2;