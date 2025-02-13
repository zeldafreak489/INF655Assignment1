import React from "react";

function Greeting() {
    return (
        <div>
            <h1>Hello, Welcome to React!</h1>
            <p style={{ color: "red", fontSize: "20px"}}>Today is {new Date().toDateString()}.</p>
        </div>
    );
}

export default Greeting;