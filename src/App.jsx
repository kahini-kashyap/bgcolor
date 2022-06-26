import React, { useState } from 'react';
import ReactDOM from "react-dom";
import "./index.css";

function App() {
    let [color, setColor] = useState("white");
    function colorChange(event) {
        if (event.target.checked) {
            setColor(randomColorGenerator());
        }
        else {
            setColor("white");
        }


    }
    function randomColorGenerator() {
        let color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        return color;
    }

    return <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
        <h1> </h1><br />
        <h1>Random Background Color Toggler</h1>
        <h2>Toggle me to change the background color!</h2><br /><br />
        <label class="toggler">
            <input type="checkbox" onChange={colorChange} />
            <span class="slide"></span>
        </label>

    </div>
}

export default App;