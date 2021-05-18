import React from 'react';
import './index.css';
import logo from '../../images/vanguard-logo-white_2.png';

function MaskCopy() {
    return (
        <div id="maskcopy">
            <div id="vanguard-container">
                <img src={logo} alt="vanguard-logo" id="vanguard-logo"/>
            </div>
            <div id="account-copy">
                <a href="#1">Account</a>
                <a href="#1">Grant</a>
                <a href="#1">Contribution</a>
                <a href="#1">Reports</a>
                <a href="#1">Log out</a>
            </div>
            <div id="welcome-elizabeth-st">
                <span id="welcome">Welcome</span>
                <span id="elizabeth-st">Elizabeth Stanton</span>
            </div>
        </div>
    );
}

export default MaskCopy;