import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import {  NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import webLogo from '../../logo2.png';
import { singaleFoodContext } from '../Details/BreakfastDetails';
import './Header.css';



const Nav = () => {

    const [ singleFood ] = useContext(singaleFoodContext);
    const history = useHistory();

    
const HandaleHistory = () => {
    history.push('/account');
}

const { user, LogOut } = useAuth();

const handaleSignOut = () => {
    LogOut();
}

const handaleHistory = () => {
    history.push('/mycart');
}


    return (

        <nav className="navbar">

            <aside>
                <img className="logo" width="170" src={webLogo} alt="" />
            </aside>
         
            <NavLink activeStyle={{color:"#E62753"}} to="/home">Home</NavLink>
         
            <aside className="buttonContainer">
             
                <span className="text-danger mt-2">{user?.displayName}</span>

                <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{marginLeft:"200px",marginTop:"5px"}}>
                    {
                    singleFood?.length ? singleFood?.length : 0
                    }
                </span>

                <i onClick={handaleHistory} className="fas fa-cart-plus me-4 fs-3 mt-1"></i>
              
                { user.email ? <button className="btn btn-danger" onClick={handaleSignOut}>Sign Out</button> :
              <aside>
                    <button className="login-button me-4">Login</button>
                   <button onClick={HandaleHistory} className="signUp-button">Sign Up</button>
               </aside>
               }
            </aside>
        
        </nav>
        
    );
};

export default Nav;