import React from 'react';
import './homepage.css';
//import navbar

function Homepage() {
    return (
        <div className="home">
            <div className="title">Ski Resorts Reviews</div>
            <div className="homepageResort">
                <button onClick={leftScroll}></button>
                <button onClick={rightScroll}></button>
            </div>
        </div>
    )
}

export default Homepage;