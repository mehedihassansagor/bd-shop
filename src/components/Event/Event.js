import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Event = (props) => {
    const { name, price, weight, imageURL, _id } = props.event;

    return (
        <div className = 'container'>
           
            <Card style={{ width: '18rem',marginTop: '7px'}}>
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       $ {price}
                     </Card.Text>
                     <Card.Text>
                       {weight}gm
                       
                     </Card.Text>
                    
                  <Link to = {`/checkout/${_id}`}> <Button  variant="primary">BUY now</Button></Link> 
                   
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Event;