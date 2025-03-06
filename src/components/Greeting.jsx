import React from "react";

function Greeting(props) {
    return (
        <div>
            <h1>Hello, {props.username}!</h1>
            <p style={{ color: "red", fontSize: "20px"}}>Today is {new Date().toDateString()}.</p>
        </div>
    );
}

export default Greeting;