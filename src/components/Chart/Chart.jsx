import React, {useState, useEffect} from 'react';
import {Pie, Line} from 'react-chartjs-2';
import eventService from "../../services/eventService";
import { PageItem } from 'react-bootstrap';



const Chart = () => {
    const id = JSON.parse(window.sessionStorage.credentials).id
    const [state, setState ]= useState({
        labels: ['January', 'February', 'March',
                 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Events',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4',
              '#175000',
              '#003350',
              '#35014F',
              '#175000',
              '#003350',
              '#35014F'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F',
            '#175000',
            '#003350',
            '#35014F',
            '#175000',
            '#003350',
            '#35014F'
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
                 arr[obj[date]]++
          } 
           return arr;
      }

      useEffect(()=>{
        getEvents();
      }, [])
    return (
      <div className="chart">
      
        <Pie
          data={state}
          options={{
            title:{
                layout:{
                    padding: {
                        left: 50,
                        right: 0,
                        top: 100,
                        bottom: 1000
                    } 
                },
              display:true,
              text:'Events per month',
              fontSize:10
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />


      </div>
    );
  
}

export default Chart;
