import React, { useState } from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import './styles.css';

const TodoItem = ({ todo, onDelete, onToggle, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);
  const [updatedDueDate, setUpdatedDueDate] = useState(todo.dueDate);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(todo.id, { text: updatedText, dueDate: updatedDueDate });
    setIsEditing(false);
  };

  const formattedCreatedAt = new Date(todo.createdAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const isOverdue = new Date(todo.dueDate) < new Date();

  return (
    <ListItem className={`todo-item ${todo.isDone ? 'done' : ''} ${isOverdue ? 'overdue' : ''}`}>
      <Checkbox
        checked={todo.isDone}
        onChange={() => onToggle(todo.id)}
        disabled={isEditing}
      />
      {isEditing ? (
        <div>
          <TextField
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            fullWidth
            variant="outlined"
            autoFocus
          />
          <TextField
            type="date"
            value={updatedDueDate}
            onChange={(e) => setUpdatedDueDate(e.target.value)}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <IconButton onClick={handleSaveClick} className="save-btn">
            <SaveIcon />
          </IconButton>
        </div>
      ) : (
        <>
          <ListItemText 
            primary={todo.text} 
            secondary={`Due Date: ${todo.dueDate} | Created: ${formattedCreatedAt}`} 
            className="todo-item-text"
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={handleEditClick} className="edit-btn">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)} className="delete-btn">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
