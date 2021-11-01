import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Launch = () => {
  
    const [ items, setItems ] = useState([]);
    const history = useHistory();

    useEffect( () => {
      
        fetch(`launchRecipe.json`)
            .then(result => result.json())
            . then(data => setItems(data));
    } , []);

    const handaleLaunchDetials = id => {
        console.log(id);
        history.push(`/launchDetails/${id}`)
    }
    
        return (
           
            <section className="item-container" style={{height:"730px"}}>
                {
                    items.map( item =>  <article 
                    onClick={()=>handaleLaunchDetials(item?.id)}
                    key={item.id}
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

export default Launch;