import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="section">
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Click Me</button>
            <p>(Clicking the button increases the count)</p>
        </div>
    );
}

export default Counter;