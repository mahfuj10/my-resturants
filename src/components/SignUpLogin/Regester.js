import React from 'react';


const Regester = () => {

    return (
      
        <div>
             <h4 className="mb-4">Sign Up</h4>
           <input placeholder=" Name" type="text" />
           <input placeholder=" Email" type="email" />
           <input placeholder=" Password" type="password" /><input type="submit" variant="danger" value="Sign Up" style={{backgroundColor:"#89ABE3"}}/>
           <small>---------------- Or sign up with ----------------</small>
                <aside className="SocialIcon">
                    <span className="SignMethod"><i class="fab fa-facebook"></i></span>
                    <span className="SignMethod"><i class="fab fa-google"></i></span>
                </aside>
        </div>
    );
};

export default Regester;