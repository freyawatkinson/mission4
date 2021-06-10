import React, { Component } from 'react';
// import CallToActionForm from './CallToActionForm';
import "./Hero.css"

// QuoteMaker
import QuoteMaker from './QuoteMaker.js';



export default class Hero extends Component {
    render() {
        return (
            <div className="hero-container">
                {/* Chatbot */}
                {/* Title */}
                <div className="hero-text">
                <h1 id="hero-title">Get your Dream car</h1>
                <br/>
                {/* Subtitle */}

                <p id="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna aliqua.</p>
                <QuoteMaker/>
                </div>
               

       
        
              
                
              

                
            </div>
        )
    }
}
