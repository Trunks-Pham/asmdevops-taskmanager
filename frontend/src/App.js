import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, deleteTask } from './api';

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetchTasks().then(({ data }) => setTasks(data));
    }, []);

    const addTask = () => {
        if (title.trim()) {
            createTask({ title }).then(({ data }) => {
                setTasks([...tasks, data]);
                setTitle('');
            });
        }
    };

    const removeTask = (id) => {
        deleteTask(id).then(() => setTasks(tasks.filter(task => task.ID !== id)));
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            {/* Tiêu đề */}
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>📝 Task Manager</h3>
            
            {/* Ô nhập liệu */}
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="New Task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: '80%', padding: '10px', marginRight: '10px' }}
                />
                <button onClick={addTask} style={{ padding: '10px' }}>Add Task</button>
            </div>

            {/* Danh sách Task */}
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {tasks.map(task => (
                    <li key={task.ID} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ccc' }}>
                        {task.Title}
                        <button onClick={() => removeTask(task.ID)} style={{ color: 'red' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;