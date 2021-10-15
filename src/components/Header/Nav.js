import React from 'react';
import { useHistory } from 'react-router';
import UseFirebase from '../../Hooks/useFirebase';
import webLogo from '../../logo2.png';
import './Header.css';

const Nav = () => {
   
const history = useHistory();
    
const HandaleHistory = () => {
    history.push('/account');
}

const { user, LogOut } = UseFirebase();

const handaleSignOut = () => {
    LogOut();
}


    return (
  
        <nav className="navbar">
  
            <aside>
                <img className="logo" width="170" src={webLogo} alt="" />
            </aside>

            <aside className="buttonContainer">
                { user.email ? <button className="btn btn-danger" onClick={handaleSignOut}>Sign Out</button> :
               <aside>
               <button className="login-button me-5">Login</button>
                <button onClick={HandaleHistory} className="signUp-button">Sign Up</button>
               </aside>
               }
            </aside>
        
        </nav>
    );
};

export default Nav;