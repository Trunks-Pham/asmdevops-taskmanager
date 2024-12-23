import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, deleteTask } from './api';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Typography, Paper, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

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
        <Container maxWidth="md">
            {/* Tiêu đề */}
            <Typography variant="h3" align="center" gutterBottom sx={{ marginTop: 4 }}>
                📝 Task Manager
            </Typography>
            
            {/* Ô nhập liệu */}
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
                <Box display="flex" gap={2}>
                    <TextField
                        fullWidth
                        label="New Task"
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={addTask} startIcon={<AddIcon />}>
                        Add Task
                    </Button>
                </Box>
            </Paper>

            {/* Danh sách Task */}
            <Paper elevation={3} sx={{ padding: 2 }}>
                <List>
                    {tasks.map(task => (
                        <ListItem key={task.ID} secondaryAction={
                            <IconButton edge="end" color="error" onClick={() => removeTask(task.ID)}>
                                <DeleteIcon />
                            </IconButton>
                        }>
                            <ListItemText primary={task.Title} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}

export default App;