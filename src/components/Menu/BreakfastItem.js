import React from 'react';


const BreakfastItem = ({breakfast}) => {
   
const { image, name, title } = breakfast;


  
   
    return (
        
        <article className="food-item">
                        <img height="170" src={image} alt="" />
                        <h6>{name}</h6>
                        <p>{title}</p>
                    </article>
                    
    );
};

export default BreakfastItem;