import React from 'react';
import bannerImg from '../../bannerbackground.png';
import './Header.css';

const HeaderBanner = () => {
   
    return (
   
        <section className="hederBanner" style={{backgroundImage:`url(${bannerImg})`}}>
           
           <aside className="searchContainer">
               <button className="searchButton">Search</button>
               <input type="text" className="searchInput" /> 
           </aside>
        
        
        </section>
        
    );
};

export default HeaderBanner;