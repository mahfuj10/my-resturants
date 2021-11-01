import React from 'react';
import { useHistory } from 'react-router';


const BreakfastItem = ({breakfast}) => {
   
const { image, name, title, id , price} = breakfast;

const history = useHistory();

const handaleHistory = () => {
    history.push(`/details/${id}`);
}
  
   
    return (
        
        <div onClick={handaleHistory} className="food-item ">
                        <img height="170" src={image} alt="" />
                        <h5 className="text-center text-dark mt-1">{name}</h5>
                        <p className="text-center text-dark fw-normal">{title}</p>
                        <aside className="d-flex justify-content-around">
                           <h5 className="text-center text-dark">${price}</h5>
                        </aside>
                    </div>
                    
    );
};

export default BreakfastItem;