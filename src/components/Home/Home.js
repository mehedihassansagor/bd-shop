import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Home.css'

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch('https://limitless-sands-55942.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))

    },[])
    console.log(events)
    return (
        <div className="display-style mt-2 ml-5">
           {
               events.map(event =><Event event={event}></Event>)
           }
        </div>
    );
};

export default Home;