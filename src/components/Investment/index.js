import React from 'react';
import './index.css';
import graph1 from '../../images/graph-a.png';
import graph2 from '../../images/graph-b.png';
import graph3 from '../../images/graph-c.png';

function Investment() {
    return (
        <div id="investment">
            <div id="investment-upper">
                <h2>Investment Options</h2>
                <span id="investment-upper-span">( Invested in 6 Options )</span>
            </div>
            <div id="investment-lower">
               <div className="investment-lower-div">
                    <img src={graph3} alt="graph" className="graph3"/>
                    <span className="investment-lower-div-heading">Short Term Bond</span>
                    <div className="investment-lower-div-inner">
                        <span className="investment-lower-div-span1">$13.56</span>
                        <span className="investment-lower-div-span2">+1.50(+12.44%)</span>
                    </div>
                </div>
                <div className="investment-lower-div">
                    <img src={graph2} alt="graph" className="graph2"/>
                    <span className="investment-lower-div-heading">Total Bond</span>
                    <div className="investment-lower-div-inner">
                        <span  className="investment-lower-div-span1">$16.23</span>
                        <span className="investment-lower-div-span2">-1.45(-8.20%)</span>
                    </div>
                </div>
                <div className="investment-lower-div">
                    <img src={graph1} alt="graph" className="graph1"/>
                    <span className="investment-lower-div-heading">Moderate Growth</span>
                    <div className="investment-lower-div-inner">
                        <span  className="investment-lower-div-span1">$39.21</span>
                        <span className="investment-lower-div-span2">+2.78(+7.63%)</span>
                    </div>
                </div>
                <div className="investment-lower-div">
                    <img src={graph3} alt="graph" className="graph3"/>
                    <span className="investment-lower-div-heading">Total Equity</span>
                    <div className="investment-lower-div-inner">
                        <span  className="investment-lower-div-span1">$23.54</span>
                        <span className="investment-lower-div-span2">+0.28(+2.11%)</span>
                    </div>
                </div>
                <div className="investment-lower-div">
                    <img src={graph2} alt="graph" className="graph2"/>
                    <span className="investment-lower-div-heading">European Stock</span>
                    <div className="investment-lower-div-inner">
                        <span  className="investment-lower-div-span1">$16.32</span>
                        <span className="investment-lower-div-span2">-1.67(+9.28%)</span>
                    </div>
                </div>
                <div className="investment-lower-div">
                    <img src={graph3} alt="graph" className="graph3"/>
                    <span className="investment-lower-div-heading">Money Market</span>
                    <div className="investment-lower-div-inner">
                        <span  className="investment-lower-div-span1">$11.20</span>
                        <span className="investment-lower-div-span2">-0.38(-3.28%)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Investment;