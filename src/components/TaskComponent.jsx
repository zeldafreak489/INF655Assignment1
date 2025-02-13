import React from "react";

function TaskComponent() {
    const tasks = [
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
    ]

    const getRandomTask = () => {
        const int = Math.floor(Math.random() * 3);
        return tasks[int].title;
    }

    return (
        <span>
            <h3>Here is your task to do before bed: {getRandomTask()}.</h3>
        </span>
    );
}

export default TaskComponent;