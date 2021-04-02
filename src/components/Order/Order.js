import React, { useContext, useEffect, useState } from 'react';
import './Order.css';
import { UserContext } from '../../App';

const Order = () => {
  const [products,setProducts] = useState([]);
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);

  useEffect(()=>{
    fetch('https://limitless-sands-55942.herokuapp.com/singleProductAdd?email='+loggedInUser.email)
    .then(res => res.json())
    .then(data => setProducts(data));
  }, [loggedInUser.email])

  return (
    <>
    <div className = "orderItem mt-5">
      <p>your order,{products.length} item</p>
      {
        products.map(product => <div>{product.name}
        <br/>
        {product.email}
        <br/>
        {product.date}
        </div>)
      }
    </div>
    </>
  );
};

export default Order;