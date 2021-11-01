import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import UseFirebase from '../Hooks/useFirebase';

const PrivateRoute = ({children, ...rest}) => {
    
    const { user } = useAuth();
    console.log(user);
    return (
        <Route

        {...rest}
        render={({location}) => user.email ? (children) : (
        <Redirect to={{pathname:"/account", state: {from:location},}}>

        </Redirect>
        )
        }
        ></Route>
    );
};

export default PrivateRoute;