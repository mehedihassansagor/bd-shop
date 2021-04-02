import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddEvent.css'


const AddEvent = () => {
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','90b1ff1b4694ad0d8de67868cf2d06c8');
        imageData.append('image', event.target.files[0]);

        // axios

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price:data.price,
            weight:data.weight,
            imageURL:imageURL,
        };
        
        console.log(eventData);
        fetch("https://limitless-sands-55942.herokuapp.com/adEvent",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side respose',res))
        
    };
    return (
        <section className="full-page">
        <div className = "add-product mt-5">
            <h5>ADD new products here</h5>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>

               product-name:&nbsp;<input name="name" placeholder = "name " ref={register} />
                <br />
                <br />
               price: &nbsp;<input name="price" placeholder = "price"ref={register} />
                <br />
                <br />
               weight:&nbsp;<input name="weight" placeholder="weight" ref={register} />
                <br />
                <br />
               Upload Image:&nbsp; <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="mt-3" type="submit" />
            </form>
        </div>
        </section>
    );
};

export default AddEvent;