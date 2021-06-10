import React, { Component } from 'react';
import './Cards.js';
import Cards from './Cards.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SectionOne.css'

export class SectionOne extends Component {
    render() {
        return (
            <div className="section-container">
                <h1 id="section-heading">Who we are and what we do</h1>
                <h2 id="section-subtitle">“basic explanation of Turner’s services”</h2>
                <Cards/>
                
            </div>
        )
    }
}

export default SectionOne




