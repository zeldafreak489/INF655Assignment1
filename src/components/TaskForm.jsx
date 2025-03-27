import React, { useState } from "react";

function TaskForm({ addTask }) {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() === "" || description.trim() === "") {
            setError("Task name and description cannot be empty.");
            return;
        }
        addTask({ id: Date.now(), title: taskName, description});
        setTaskName("");
        setDescription("");
        setError("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Task</button>
            {error && <p style={{ color: "red"}}>{error}</p>}
        </form>
    );
}

export default TaskForm;