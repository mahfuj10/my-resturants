import React from 'react';
import FacilityCard from './FacilityCard';
import './Facility.css';

const Facility = () => {
  
    return (
  
        <section>
          
            <h3>Why you choose us</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nulla facilis corporis distinctio corrupti ducimus cumque ratione. Reprehenderit, accusamus! Reprehenderit!</p>
          
            <article className="ourFacility">
                  <FacilityCard />
            </article>
        </section>
    );
};

export default Facility;