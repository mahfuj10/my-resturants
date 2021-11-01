import Tabs from "@restart/ui/esm/Tabs";
import { Tab } from "bootstrap";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import ItemName from "./ItemName";
import Launch from "./Launch";
import './Menu.css';

const Menu = () => {

  return (
  
  <div>
      <ul className="nav navTabs nav-tabs"  id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Breakfast
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link "
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="true"
          >
           Launch
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="true"
          >
            Dinner
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane  fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Breakfast />
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Launch />
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <Dinner />
        </div>
      </div>
    </div>
    // <BrowserRouter>

    // <ItemName/>

    // <Switch>
    //     <Route exact path="/">

    //         <Breakfast />
    //     </Route>

    //     <Route exact path="/home">

    //         <Breakfast />
    //     </Route>

    //     <Route path="/breakfast">
    //         <Breakfast />
    //     </Route>

    //     <Route path="/launch">
    //         <Launch />
    //     </Route>

    //     <Route path="/dinner">
    //         <Dinner />
    //     </Route>

    // </Switch>
    // </BrowserRouter>
  );
};

export default Menu;
