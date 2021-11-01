import React from 'react';
import firstImage from '../../Image/image7.png';
import secondImage from '../../Image/chefImg.png';
import thirdImage from '../../Image/homeDelvery.png';
import icon1 from '../../ICON/Group 204.png'
import icon2 from '../../ICON/Group 245.png'
import icon3 from '../../ICON/Group 1133.png'
import './Facility.css';

const FacilityCard = () => {
   
    return (
   
       <section className="cardContainer">

                <articel>
                        <img src={firstImage} alt="" />
                
                 <aside className="d-flex facilityTitle ms-4 mt-3 gap-3">
                               <aside>
                                     <img src={icon1} alt="" />
                               </aside>
                                <span>
                                        <h5>Fast Delevery</h5>
                                        <p>Keep your systems in sync with automated web hook bassed notification each time is paid and how we dream about our future.</p>
                                        <p>See more</p>
                                </span>
                        </aside>
                </articel>

                <articel>
                        <img src={secondImage} alt="" />
                      
                        <aside className="d-flex facilityTitle ms-4 mt-3 gap-3">
                               <aside>
                                     <img src={icon2} alt="" />
                               </aside>
                                <span>
                                        <h5>Fast Delevery</h5>
                                        <p >Keep your systems in sync with automated web hook bassed notification each time is paid and how we dream about our future.</p>
                                        <p>See more</p>
                                </span>
                        </aside>
                </articel>

                <articel>
                        <img src={thirdImage} alt="" />
                
                        <aside className="d-flex facilityTitle ms-4 mt-3 gap-3">
                               <aside>
                                     <img src={icon3} alt="" />
                               </aside>
                                <span>
                                        <h5>Fast Delevery</h5>
                                        <p>Keep your systems in sync with automated web hook bassed notification each time is paid and how we dream about our future.</p>
                                        <p>See more</p>
                                </span>
                        </aside>
                </articel>

        </section>
    );
};

export default FacilityCard;