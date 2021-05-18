import React from 'react';
import './index.css';
import arrownImg from '../../images/icons8-chevron-down-50.png';

function Rectangle() {
    return (
        <div id="rectangle">
            <div id="arrow-container">
                <h3>The Stanton Children's Education Fund</h3>
                <img src={arrownImg} alt="arrow" id="arrow-down"/>
            </div>
            <p id="standard-vcep">The standard VCEP Seed Fund</p>
        </div>
    );
}

export default Rectangle;