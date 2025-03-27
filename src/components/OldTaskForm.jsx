import React from "react";
import { useState } from "react";

function OldTaskForm() {
    const[task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task Submitted: ", task);
        setTask(""); // clear input field after submission
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter Task Name"
                value={task}
                onChange={(e) => setTask(e.target.value)} 
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default OldTaskForm;