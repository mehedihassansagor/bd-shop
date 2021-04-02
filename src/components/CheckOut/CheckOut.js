import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CheckOut.css'
import { UserContext } from '../../App';


const CheckOut = () => {
    const { id } = useParams();
    const [events, setEvents] = useState([]);
    const item = events.filter(i => i._id === id)
    console.log(item[0]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://limitless-sands-55942.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))

    }, [])
    console.log(id)
    const imgStyle = { height: "200px", width: "200px" }

    const handlePlace = () => {
        console.log('place korsi')

        const product = {
            name: item[0].name,
            price: item[0].price,
            weight: item[0].weight,
            email: loggedInUser.email,
            date: new Date()
        }
        console.log(product)
        const newItem = { ...product }
        console.log(newItem)
        fetch('https://limitless-sands-55942.herokuapp.com/singleProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="mt-5">
            <div className="product">
                <h1>This is YOUR Product</h1>
                <p>{loggedInUser.email}</p>
                <h5>name:{item[0]?.name}</h5>
                <h5>price: $ {item[0]?.price}</h5>
                <h5>weight: {item[0]?.weight}gm</h5>
                <p>quantity:1</p>
                <img style={imgStyle} src={item[0]?.imageURL}></img>
                <Button className="ml-2" onClick={handlePlace} variant="outline-primary">place order</Button>
            </div>
        </div>
    );
};

export default CheckOut;