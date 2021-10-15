import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Breakfast from './Breakfast';
import Dinner from './Dinner';
import ItemName from './ItemName';
import Launch from './Launch';

const Menu = () => {
    
    return (
        
            <BrowserRouter>

            {/* <Breakfast /> */}
            <ItemName/>
            <Switch>

                <Route path="/breakfast">
                    <Breakfast />
                </Route>


                <Route path="/launch">
                    <Launch />
                </Route>

                <Route path="/dinner">
                    <Dinner />
                </Route>
         
         
            </Switch>
            </BrowserRouter>
    );
};

export default Menu;