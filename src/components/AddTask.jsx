import React, { useState } from 'react';

export const AddTask = ({ AddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (newTask === '') return;
    AddTask(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        className='form-input'
        type='text'
        id='task-title'
        value={newTask}
        maxLength={25}
        placeholder='Enter a new task'
        onChange={e => setNewTask(e.target.value)}
      />
      <button className='button'>Add Task</button>
    </form>
  );
};
