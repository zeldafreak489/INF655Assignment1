import React, { useState } from "react";

function Greeting(props) {
    const [greeting, setGreeting] = useState("Hello");

    const changeGreeting = () => {
        setGreeting(greeting === "Hello" ? "Welcome" : "Hello");
    };

    return (
        <div>
            <h1>{greeting}, {props.username}!</h1>
            <p style={{ color: "red", fontSize: "20px"}}>Today is {new Date().toDateString()}.</p>
            <button onClick={changeGreeting}>Change Greeting</button>
        </div>
    );
}

export default Greeting;