import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Dinner = () => {

const [ items, setItems ] = useState([]);
const history = useHistory();

useEffect( ()=> {
    fetch(`dinnerRecipe.json`)
        .then(result => result.json())
        . then(data => setItems(data));
} , [])

const handaleDinnerDetials = id => {
    history.push(`/dinnerDetails/${id}`)
}

    return (
       
        <section className="item-container" style={{height:"730px"}}>
            {
                items.map( item => <article 
                onClick={() => handaleDinnerDetials(item.id)}
                className="food-item">
                    <img height="170" src={item.image} alt="" />
                    <h5 className="text-center mt-2">{item.name}</h5>
                    <p className="text-center">{item.title}</p>
                  <h5 className="text-center">${item.price}</h5>
                </article>)
            }
        </section>
    );
};

export default Dinner;