import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const ItemName = () => {

    const linkStyle = {
        color:"#E62753",
        borderBottom:'3px solid #E62753'
    }

    return (
   
        <nav  className="d-flex gap-5 justify-content-center mt-5">
            <NavLink activeStyle={linkStyle} to="/breakfast">Breakfast</NavLink>
            <NavLink activeStyle={linkStyle} to="/launch">Launch</NavLink>
            <NavLink activeStyle={linkStyle} to="/dinner">Dinner</NavLink>
        </nav>
    );
};

export default ItemName;