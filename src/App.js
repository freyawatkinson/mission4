import React, { useState, Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Search.js';
// import Announcer from './announcer';
import Header from './components/Header.js';

import Cards from './components/Cards.js';
import Hero from './components/Hero.js';
import CallToActionForm from './components/CallToActionForm.js';
import Footer from './components/Footer.js';
import SectionOne from './components/SectionOne.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteMaker from './components/QuoteMaker';


// import { MDBFooter } from 'mdb-react-ui-kit';

// import SectionOne from './components/SectionOne.js';


const App = () => {


    return (
        <Router>
            <div className="App">

            <Header/>
          
            <SectionOne/>
            <Hero/>
           
            <CallToActionForm/>
            <Footer/>
                
            </div>
            
        </Router>
    );
};

export default App;
