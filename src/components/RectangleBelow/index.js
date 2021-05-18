import React from 'react';
import './index.css';

function RectangleBelow() {
    return (
        <div id="rectangle-below">
            <div id="upper">
                <div className="upper-div">
                    <span className="balance">Available Balance</span>
                    <span className="amount">$500,000</span>
                    <button type="button" id="rect-btn">Add</button>
                </div>
                <div className="upper-div">
                    <span className="balance">Current Balance</span>
                    <span className="amount">$536,000</span>
                </div>
                <div className="upper-div">
                    <span className="balance">Grant made</span>
                    <span className="amount">$139,000</span>
                </div>
            </div><hr/>
            <div id="lower">
                <div id="lower-div1">
                    <h2>Legacy journey</h2>
                    <div></div>
                </div>
                <div id="lower-div2">
                    <h2>Activity</h2>
                    <div className="lower-div2-div">
                        <p className="lower-div2-money">$50,000</p>
                        <div className="lower-div2-amount">
                            <p className="lower-div2-amount-para1">Wire Transfer</p>
                            <p className="lower-div2-amount-para2">1 Jan 2017</p>
                        </div>
                    </div>
                    <div className="lower-div2-div">
                        <p className="lower-div2-money">$50,000</p>
                        <div className="lower-div2-amount">
                            <p className="lower-div2-amount-para1">Grant made</p>
                            <p className="lower-div2-amount-para2">1 Feb 2017</p>
                        </div>   
                    </div>
                    <div className="lower-div2-div">
                        <p className="lower-div2-money-text">Recommended an exchange</p>
                        <div className="lower-div2-amount">
                            <p className="lower-div2-amount-para1">Gift Preservation</p>
                            <p className="lower-div2-amount-para2">8 March 2017</p>
                        </div>
                    </div>
                    <div className="lower-div2-div">
                        <p className="lower-div2-money-text">Recommended an exchange</p>
                        <div className="lower-div2-amount">
                            <p className="lower-div2-amount-para1">Conservative Growth</p>
                            <p className="lower-div2-amount-para2">10 July 2017</p>
                        </div>
                    </div>
                    <div className="lower-div2-div">
                        <p className="lower-div2-money">$50,000</p>
                        <div className="lower-div2-amount">
                            <p className="lower-div2-amount-para1">Wire Transfer</p>
                            <p className="lower-div2-amount-para2">1 Jan 2018</p>
                        </div>
                    </div>
                    <a href="#1" id="lower-div2-amount-link">Show more+</a>
                </div>
            </div>
        </div>
    );
}

export default RectangleBelow;