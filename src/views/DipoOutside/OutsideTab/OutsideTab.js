import "styles/index.css";
import React, { useState } from 'react';
import Outcontroller from './OutController';
function OutsideTab() {
    const [data, setData] = useState("Sale options");
    function handleClick(e) {
        setData(e.target.value);
   }
    return(
        <div className="col-md-12 col-12 mt-4">
            <div className="row justify-content-center">
                <div className="col-md-2 col-4 float-left activeborder text-center">
                    <button className="Mybtn pt-3 pb-3" value="Sale options" onClick={handleClick}>Sale options</button>
                </div>
                <div className="col-md-2 col-4 float-left activeborder text-center">
                    <button className="Mybtn pt-3 pb-3" value="Project details" onClick={handleClick}>Project details</button>
                </div>
                <div className="col-md-2 col-4 float-left activeborder text-center">
                    <button className="Mybtn pt-3 pb-3"
                     value="Your Allocation" onClick={handleClick}>Your Allocation</button>
                </div>
            </div>
            <Outcontroller tmp={data}></Outcontroller>
        </div>
    );
}
export default OutsideTab;