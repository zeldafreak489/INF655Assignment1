import React, { useState, useEffect } from "react";
import TaskForm from './TaskForm.jsx';
import {
    addDoc, collection, orderBy, getDocs, updateDoc, doc, limit, deleteDoc
} from "firebase/firestore";
import { db } from "../firebase.js";
import { query } from "firebase/firestore";

function TaskComponent() {
    const [tasks, setTasks] = useState([]);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const taskListRef = collection(db, "tasks");
                const q = query(taskListRef, orderBy("title"), limit(10));
                const querySnapshot = await getDocs(q);
                const taskList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTasks(taskList);
            } catch (error) {
                console.error("Error Fetching Task List", error);
            }
        };
        fetchTasks();
    }, []);

    const addTask = async (newTask) => {
        // newTask.id = uuidv4();
        try {
            const docRef = await addDoc(collection(db, "tasks"), newTask);
            console.log("document written: ", docRef.id);
            setTasks((preTaskList) => [
                ...preTaskList,
                { ...newTask, id: docRef.id }
            ]);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            deleteTask(id);
        }
    };

    const deleteTask = async (id) => {
        try {
            await deleteDoc(doc(db, "tasks", id));
            setTasks(tasks.filter(task => task.id !== id));
            console.log("Task deleted: ", id);
        } catch (err) {
            console.error("Error deleting task: ", err);
        }
    };

    const handleEditClick = (task) => {
        setEditingTaskId(task.id);
        setEditTitle(task.title);
        setEditDescription(task.description);
    };

    const handleEditSave = async (id) => {
        const updatedTask = {
            title: editTitle,
            description: editDescription
        };

        try {
            const docRef = doc(db, "tasks", id);
            await updateDoc(docRef, updatedTask);
            setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
        } catch (error) {
            console.error("Error updating task", error);
        }

        setEditingTaskId(null);
        setEditTitle("");
        setEditDescription("");
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = () => {
        setTasks([...tasks].sort((a, b) => a.title.localeCompare(b.title)));
    };

    const filteredTasks = tasks.filter(task =>
        task.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="task-manager">
            <h1 className="task-manager-title">Task Manager</h1>

            <TaskForm addTask={addTask} />

            <h2>Search Tasks</h2>
            <div className="task-controls">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className="sort-button" onClick={handleSort}>Sort by Name</button>
            </div>

            <ul className="task-list">
                {filteredTasks.map(task => (
                    <li key={task.id} className="task-card">
                        {editingTaskId === task.id ? (
                            <div className="task-edit-form">
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                />
                                <textarea
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                />
                                <button onClick={() => handleEditSave(task.id)}>Save</button>
                                <button onClick={() => setEditingTaskId(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div className="task-content">
                                <h3 className="task-title">{task.title}</h3>
                                <p className="task-description">{task.description}</p>
                                <button onClick={() => handleEditClick(task)}>Edit</button>
                                <button onClick={() => handleDelete(task.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskComponent;
