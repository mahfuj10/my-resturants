import React from 'react';
import firstImage from '../../Image/image7.png';
import secondImage from '../../Image/chefImg.png';
import thirdImage from '../../Image/homeDelvery.png';
import './Facility.css';

const FacilityCard = () => {
   
    return (
   
        <section className="cardContainer">

                <article>
                   
                    <aside>
                        <img src={firstImage} alt="" />
                    </aside>
                   
                    <aside>
                       <h5>Fast Delevery</h5>
                       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum?</p>
                       <p>See more</p>
                    </aside>
                    
                </article>

                <article>
                   
                   <aside>
                        <img src={secondImage} alt="" />
                   </aside>
                   
                    <aside>
                       <h5>A Good Auto Responder</h5>
                       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum?</p>
                       <p>See more</p>
                    </aside>

                </article>

                <article>
                   
                  <aside>
                         <img src={thirdImage} alt="" />
                  </aside>
                   
                    <aside>
                       <h5>Home Delevery</h5>
                       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum?</p>
                       <p>See more</p>
                    </aside>

                </article>


        </section>
    );
};

export default FacilityCard;