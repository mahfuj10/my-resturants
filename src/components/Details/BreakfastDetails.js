import React, { createContext, useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useFoodEffect from '../../Hooks/FoodItems/FoodItem'
import './Details.css';


export const foodContext = createContext();
export const singaleFoodContext = createContext();



const BreakfastDetails = () => {

  const params = useParams();

    const {items, MatchFoodDetails } = useFoodEffect();
    MatchFoodDetails();

    const quantity = document.getElementById("count");
    const productPrice = document.getElementById("foodPrice");
    
    const [ food, setFood ] = useContext(foodContext);
    const [ singleFood, setSingleFood ] = useContext(singaleFoodContext);
    const [ singaleFood, setSingaleFood ] = useState([]);
    const foodDetails = items.find( food => food.id === params.foodId );
    
    
    const hanadleAddToCart = () => {
        setFood(foodDetails);
        foodDetails['totalCost'] = productPrice.innerText;
        foodDetails['quantity'] = quantity.innerText;
        const newArr = [ ...singaleFood , food];
        setSingaleFood(newArr);
       const singleFoodArr = singaleFood;
       setSingleFood(singleFoodArr)
    }


const handaleIncrease = () => {
quantity.innerText = parseInt(quantity.innerText) + 1 ;
productPrice.innerText = parseInt(foodDetails?.price) * parseInt(quantity.innerText);
}

const handaleDecrase  =  () => {
    // const quantity = document.getElementById("count");
    // const price = document.getElementById("foodPrice");
if(quantity.innerText > 1){
    quantity.innerText = parseInt(quantity.innerText) - 1 ;
    productPrice.innerText = parseInt(foodDetails?.price) * parseInt(quantity.innerText);
}
}

// const handaleFood = () => {
//     const newArr = [...singaleFood , food];
//     setSingaleFood(newArr);
// }

    return (

        
          <Row style={{marginTop:"10%"}}> 
            <Col>

            <article style={{marginLeft:"40%",marginTop:"6%"}}>

              <h1 className="mb-4">{foodDetails?.name}</h1>
              <p className="  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, doloribus repellat porro tempore ea voluptatum qui quam modi ullam impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ipsa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, necessitatibus?</p>
             
              <aside className="d-flex  gap-4 mt-4">
                  <h1 style={{width:"83px"}}>$<span id="foodPrice">{foodDetails?.price}</span></h1>
                  <button className="increaseBtn mt-2">
                     <i onClick={handaleDecrase}  className="fas fa-minus me-3 fw-normal"></i>
                    <span id="count" className="fs-5 fw-bold">1</span>
                     <i className="fas fa-plus ms-3 text-danger fw-normal" onClick={handaleIncrease}></i>
                  </button>
              </aside>

              <button onClick={hanadleAddToCart} className="cartButton mt-3" ><i className="fas fa-cart-plus me-2"></i> Add</button>
           
            </article>
           </Col>
            
            <Col>
             <article style={{marginLeft:"10%"}}>
                 <img width="500" src={foodDetails?.image} alt="" />
             </article>
            
            </Col>
           </Row>
    );
};

export default BreakfastDetails;