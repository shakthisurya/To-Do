import React, { useState, useEffect } from 'react';
import { Container, Button, Typography, TextField } from '@mui/material';
import TodoList from './TodoList';
import { db } from './firebase';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('todos').onSnapshot(snapshot => {
      const updatedTodos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTodos(updatedTodos);
    });

    return () => unsubscribe();
  }, []);

  const handleAddTodo = () => {
    if (!text.trim()) return;
    const newTodo = {
      text,
      dueDate: dueDate || 'No Due Date',
      isDone: false,
      createdAt: new Date().toLocaleString()
    };
    db.collection('todos').add(newTodo);
    setText('');
    setDueDate('');
  };

  const handleDeleteTodo = id => {
    db.collection('todos').doc(id).delete();
  };

  const handleToggleTodo = id => {
    const todoRef = db.collection('todos').doc(id);
    todoRef.get().then(doc => {
      if (doc.exists) {
        const updatedTodo = {
          ...doc.data(),
          isDone: !doc.data().isDone
        };
        todoRef.update(updatedTodo);
      }
    });
  };

  const handleUpdateTodo = (id, newData) => {
    db.collection('todos').doc(id).update(newData);
  };

  return (
    <div className="app-container">
      <Container maxWidth="md" className="container">
        <Typography variant="h2" component="h1" className="title">
          Todo List App
        </Typography>
        <div className="add-todo-container">
          <TextField
            fullWidth
            label="Add Todo"
            value={text}
            onChange={e => setText(e.target.value)}
            variant="outlined"
            className="add-todo-input"
            autoFocus
          />
          <TextField
            fullWidth
            type="date"
            label="Due Date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            className="add-todo-input"
          />
          <Button variant="contained" onClick={handleAddTodo} className="add-todo-button">Add</Button>
        </div>
        {todos.length > 0 && (
          <div className="todo-list">
          <TodoList
            todos={todos}
            onDelete={handleDeleteTodo}
            onToggle={handleToggleTodo}
            onUpdate={handleUpdateTodo}
          />
          </div>
        )}
      </Container>
    </div>
  );
};

export default App;
