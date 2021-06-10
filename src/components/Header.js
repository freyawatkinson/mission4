import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchBar from './Search.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

const posts = [
    // { id: '1', name: 'This first post is about React' },
    // { id: '2', name: 'This next post is about Preact' },
    // { id: '3', name: 'We have yet another React post!' },
    // { id: '4', name: 'This is the fourth and final post' },
];

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};


export default function Header() {


    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);




    return (
        <header className="Header">
            {/* Insert logo image here */}
            <div className="nav-container">
            <nav className="Nav">
                
            
                <div className="logo">TURNERS</div>
                <a className="Links" href="/">Find a car</a>
                <a className="Links" href="/">Sell your car</a>
                <a className="Links" href="/">Finance</a>
                <a className="Links" href="/">Insurance</a>

            {/* <div id="nav-button-container"> */}
                
            <a className="Links" id="account-button" href="/"><Button variant="dark" size="lg">Create Account</Button></a>
          
          
            <a className="Links" id="login-button" href="/"><Button variant="dark-outline" size="lg">Log in</Button></a>
    

            
{/*            
            </div>    */}
        
                
            </nav>

                    {/* Search Bar component for nav bar */}

                    <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            
            

            </div>
        </header>
    )
}