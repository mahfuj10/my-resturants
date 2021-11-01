import React from 'react';
import FacilityCard from './FacilityCard';
import './Facility.css';

const Facility = () => {
  
    return (
  
        <section className="pt-5">
          
            <h3 className="fw-bold mt-5 mb-4" style={{marginLeft:"120px"}}>Why you choose us</h3>
            <p className="w-25 facilityText" >Barton waited twenty always repair in within we do . An delighted offending curiosity my is daswoods at . Boy prosperous increasing surronded.</p>
          
            <article className="ourFacility row" >
                 <FacilityCard></FacilityCard>
            </article>
        </section>
    );
};

export default Facility;