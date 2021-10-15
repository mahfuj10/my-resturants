import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Facility from './components/Facility/Facility';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Header/Nav';
import Menu from './components/Menu/Menu';
import SignUpLogin from './components/SignUpLogin/SignUpLogin';



function App() {
  
  return (

          <BrowserRouter>

               
        
        {/* <BreakfastDetails /> */}
        
          <Switch>

             <Route exact path='/'>
                  <Header />
                  <Menu />
                  <Facility />
                  <Footer />
             </Route>

            <Route path="/account">
                  <Nav />
                  <SignUpLogin />
            </Route>
          
     
          
          </Switch>

          </BrowserRouter>

);
}



export default App;
