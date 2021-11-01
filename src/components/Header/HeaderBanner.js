import React from 'react';
import bannerImg from '../../bannerbackground.png';
import './Header.css';

const HeaderBanner = () => {
   
    return (
   
        <section className="hederBanner" style={{backgroundImage:`url(${bannerImg})`,backgroundColor:"#FCF4E0"}}>
           <aside>
               <h1>The food we love to share</h1>
           </aside>
           <aside className="searchContainer">
               <button className="searchButton">Search</button>
               <input type="text" placeholder="Search food items" className="searchInput" /> 
           </aside>
        
        
        </section>
        
    );
};

export default HeaderBanner;