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
        <div>
            <form className="task-form" onSubmit={handleSubmit}>
                <h2 className="add-task-title">Add a Task</h2>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Enter Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <input
                    className="form-input"
                    type="text"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className="form-button" type="submit">Add Task</button>
                {error && <p className="error-message" style={{ color: "red"}}>{error}</p>}
            </form>
        </div>
        
    );
}

export default TaskForm;