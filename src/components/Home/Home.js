import React from 'react';
import Facility from '../Facility/Facility';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <div>
             <Header />
                 <Menu />
                  <Facility />
        </div>
    );
};

export default Home;