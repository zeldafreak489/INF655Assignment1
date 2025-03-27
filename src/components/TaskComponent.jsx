import React from "react";
import { useState } from 'react'
import TaskForm from './TaskForm.jsx'

function TaskComponent() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Read Book",
            description: "Read your current book before you go to bed."
        },
        {
            id: 2,
            title: "Brush Teeth",
            description: "Brush your teeth."
        },
        {
            id: 3,
            title: "Brush Hair",
            description: "Brush your hair with a brush."
        }
    ]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            setTasks(tasks.filter(task => task.id !== id));
            deleteTask(id);
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = () => {
        setTasks([...tasks].sort((a, b) => a.title.localeCompare(b.title)));
    };

    const filteredTasks = tasks.filter(task => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getRandomTask = () => {
        const int = Math.floor(Math.random() * 3);
        return tasks[int].title;
    }

    return (
        <div>
            <TaskForm addTask={addTask} />
            <input 
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <button onClick={handleSort}>Sort by Name</button>
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskComponent;