import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { foodContext, singaleFoodContext } from '../Details/BreakfastDetails';
import './Cart.css';

const Cart = () => {

    // const [ singaleFood, setSingaleFood ] = useState([]);

    const [food] = useContext(foodContext);
    const [houseRoad, setHouseRoad] = useState('');
    const [delveryMode, setDelveryMode] = useState('');
    const [userFlat, setUserFlat] = useState('');
    const [buisessName, setBuisessName] = useState('');
    const [delveryInstructor, setDelveryInstructor] = useState('');
    //   const [ singaleFood, setSingaleFood ] = useState([]);
    const [singleFood, setSingleFood] = useContext(singaleFoodContext)


    const userInputText = () => {

        const deleveryMode = document.getElementById("deleveryMode");
        const houseStreet = document.getElementById("houseStreet");
        const houseNo = document.getElementById("houseNo");
        const buisnessName = document.getElementById("buisnessName");
        const delveryInstruction = document.getElementById("delveryInstruction");

        setHouseRoad(houseStreet.value);
        setDelveryMode(deleveryMode.value);
        setUserFlat(houseNo.value);
        setBuisessName(buisnessName.value);
        setDelveryInstructor(delveryInstruction.value);


    }

    // console.log(singleFood);
    // const newArr = [...singaleFood , food ];
    // setSingaleFood(newArr);

    // // const handaleFood = () => {
    // const newArr = [...singaleFood , food ];
    // setSingaleFood(newArr);
    //     console.log(newArr);
    // }

    return (

        <section className="container deleveryDetails">
            <Row>
            <Col lg={6}>
                    <h4 style={{ borderBottom: "2px solid black", paddingBottom: "20px", marginBottom: "30px" }}>Edit Delevery Details</h4>
                    <input id="deleveryMode" type="text" placeholder="Delevery Mode" />
                    <input id="houseStreet" required type="text" placeholder="Road No" />
                    <input id="houseNo" type="text" placeholder="Flat, suite or floor" />
                    <input id="buisnessName" type="text" placeholder="Buisness Name" />
                    <textarea id="delveryInstruction" name="message" cols="48" rows="3" placeholder="Add delevery instructor" ></textarea>
                    <input onClick={userInputText} id="saveButton" type="submit" variant="primary" value="Save & Containue" />
                </Col>
           

            
                

                <Col lg={6} >
                    <article style={{ marginLeft: "100px" }}>
                        {food?.name && <aside>  <p><span>From</span> <b>Gulsan Plaza Resturants GPR</b></p>
                            <p>Arriving in 20-30 min</p></aside>}
                        <p>{houseRoad}</p>
                        <p>{delveryMode}</p>
                        <p>{userFlat}</p>
                        <p>{buisessName}</p>
                        <p>{delveryInstructor}</p>
                        {
                singleFood.map(item =>  <aside className="d-flex mb-4 cartItem gap-4 align-items-center">
                <img src={item?.image} width="100" alt="" />
                <span>
                    <h6>{item?.name}</h6>
                    <h5 className="text-danger">${item?.totalCost}</h5>
                    <small className="text-secondary">Delivery free</small>
                </span>
                <span className="d-flex gap-2 align-items-center">
                    
                    {/* <i className="fas fa-minus fw-normal"></i> <span>{item?.quantity}</span>
                    <i className="fas fa-plus text-danger fw-normal"></i> */}
                </span>
            </aside>)
                        }
                        {/* {food?.name ? <aside className="d-flex cartItem gap-4 align-items-center">
                            <img src={food?.image} width="100" alt="" />
                            <span>
                                <h6>{food?.name}</h6>
                                <h5 className="text-danger">${food?.totalCost}</h5>
                                <small className="text-secondary">Delivery free</small>
                            </span>
                            <span className="d-flex gap-2 align-items-center">
                                <i className="fas fa-minus fw-normal"></i> <span>{food?.quantity}</span>
                                <i className="fas fa-plus text-danger fw-normal"></i>
                            </span>
                        </aside> : <aside>
                            <img src="https://image.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg" alt="emtycartimg" />
                            <h5 className="text-secondary">Please add food on your cart .</h5>
                        </aside>} */}

                    </article>
                </Col>

            </Row>


            {/* {
            singaleFood.map( ss => <h4> {ss.name} </h4> )
        } */}

        </section>
    );
};

export default Cart;