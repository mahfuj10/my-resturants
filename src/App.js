import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import BreakfastDetails, { foodContext, singaleFoodContext } from './components/Details/BreakfastDetails';
import DinnerDetials from './components/Details/DinnerDetails';
import LaunchDetials from './components/Details/LaunchDetials';
import Footer from './components/Footer/Footer';
import Nav from './components/Header/Nav';
import Home from './components/Home/Home';
import SignUpLogin from './components/SignUpLogin/SignUpLogin';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';



function App() {
  
      const [ food , setFood ] = useState();
      const [ singleFood , setSingleFood ] = useState();

  return (
   
    <AuthProvider>

      <singaleFoodContext.Provider value={[singleFood, setSingleFood]}>
       <foodContext.Provider value={[ food , setFood ]}>

      <BrowserRouter>            
        
            <Nav />
          <Switch>
            
             <Route exact path='/'>
                 <Home />
             </Route>

             <Route  path='/home'>
                 <Home />
             </Route>

            <Route path="/account">
                  <SignUpLogin />
            </Route>

            <PrivateRoute  path="/mycart">
                  <Cart />
            </PrivateRoute>
          
          <Route  path="/details/:foodId">
                 <BreakfastDetails />
          </Route>

          <Route  path="/launchDetails/:launchId">
                  <LaunchDetials />
          </Route>

          <Route  path="/dinnerDetails/:dinnerId">
                  <DinnerDetials />
          </Route>

          
          </Switch>
          <Footer />

      </BrowserRouter>

    </foodContext.Provider>
    </singaleFoodContext.Provider>
    </AuthProvider>
);
}



export default App;
