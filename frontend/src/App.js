import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './api';

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetchTasks().then(({ data }) => setTasks(data));
    }, []);

    const addTask = () => {
        createTask({ title }).then(({ data }) => setTasks([...tasks, data]));
    };

    const removeTask = (id) => {
        deleteTask(id).then(() => setTasks(tasks.filter(task => task.ID !== id)));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.ID}>
                        {task.Title}
                        <button onClick={() => removeTask(task.ID)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;