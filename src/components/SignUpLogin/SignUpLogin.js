import React from 'react';
import UseFirebase from '../../Hooks/useFirebase';
import Regester from './Regester';
import './SignUpLogin.css';


const handaleSignUp = () => {
    const formBox = document.getElementById("formBox");
    const body = document.querySelector(".body");
    formBox.classList.add("active");
    body.classList.add("active");
}
const handaleSignIn = () => {
    const formBox = document.getElementById("formBox");
    const body = document.querySelector(".body");
    formBox.classList.remove("active");
    body.classList.remove("active"); 
}




const SignUpLogin = () => {

    const { googleSignIn } = UseFirebase(); 
    const handaleGoogleSign = () => {
       googleSignIn();
    }
    
    return (

    <div className="body">    
        <div className="container">
        <div className="form-container">
            
            <div className="box signIn">
                <h3>Already Have an Account ?</h3>
                <button id="signinBtn" onClick={handaleSignIn} >Sign in</button>
            </div>

            <div className="box signUp">
                <h3>Don't Have an Account ?</h3>
                <button id="signupBtn" onClick={handaleSignUp}>Sign Up</button>
            </div>

        </div>

                {/* sign in box */}
        <div id="formBox">
            <div className="form signinForm">
            <form>
                {/* <span>{user.displayName}</span> */}
                <h3>Sign In</h3>
                <input type="email" placeholder="Enter your Email"/>
                <input type="password" placeholder="Enter your Password"/>
                {/* <button >Sign Out</button> */}
                <input type="submit" value="Sign In"  className=" p-2 submitBtn" /><br />
                <a href className="text-danger text-center forgetText"> Forget Password ?</a><br /><br />
                <small>----------------- Or sign in with -----------------</small>
                <aside className="SocialIcon">
                    <span  className="SignMethod"><i class="fab fa-facebook"></i></span>
                    <span onClick={handaleGoogleSign} className="SignMethod"><i class="fab fa-google"></i></span>
                </aside>
            </form>
            </div>

                    {/* sign up box */}
            <div className="form signUpForm">
               <Regester />
            </div>
        </div>

    
    </div>
    </div>
)
}
export default SignUpLogin;