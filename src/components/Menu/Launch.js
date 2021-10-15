import React, { useEffect, useState } from 'react';

const Launch = () => {
  
    const [ items, setItems ] = useState([]);

    useEffect( ()=> {
      
        fetch(`launchRecipe.json`)
            .then(result => result.json())
            . then(data => setItems(data));
    } , [])
    
        return (
           
            <section className="item-container">
                {
                    items.map( item =>  <article 
                    key={item.id}
                    className="food-item">
                        <img height="170" src={item.image} alt="" />
                        <h6>{item.name}</h6>
                        <p>{item.title}</p>
                    </article>)
                }
            </section>
        );
};

export default Launch;