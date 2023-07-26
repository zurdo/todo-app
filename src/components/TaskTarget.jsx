import React from 'react';

export const TaskTarget = ({ task, toggleDone }) => {
  const handleDoubleClick = () => {
    toggleDone(task);
  };

  return (
    <section>
      <p onDoubleClick={handleDoubleClick}>
        <input
          type='checkbox'
          name='done'
          id='done'
          checked={task.done}
          onChange={() => toggleDone(task)}
        />
        {` ${task.title}`}
      </p>
    </section>
  );
};
