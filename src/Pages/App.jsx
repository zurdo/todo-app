import React, { useEffect, useState } from 'react';
import { TaskList } from '../components/TaskList';
import { AddTask } from '../components/AddTask';
import { ShowDone } from '../components/ShowDone';
import '../app.css';

export const App = () => {
  const [taskList, setTasksList] = useState([]);
  const [showDone, setShowDone] = useState(false);
  const handleAddTask = task => {
    setTasksList([...taskList, { id: task, title: task, done: false }]);
  };
  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data) {
      setTasksList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  const handleToggleDone = task => {
    setTasksList(
      taskList.map(t => (t.title == task.title ? { ...t, done: !t.done } : t))
    );
  };

  const handleDeleteDone = () => {
    setTasksList(taskList.filter(task => !task.done));
    setShowDone(false);
  };

  return (
    <main>
      <div className='container'>
        <AddTask AddTask={handleAddTask} />
        <TaskList
          taskList={taskList}
          title={'To do Tasks'}
          toggleDone={handleToggleDone}
        />
        <ShowDone
          isChecked={showDone}
          setShowDone={checked => setShowDone(checked)}
          handleDeleteDone={handleDeleteDone}
        />
        {showDone && (
          <TaskList
            taskList={taskList}
            toggleDone={handleToggleDone}
            showDone={true}
          />
        )}
      </div>
    </main>
  );
};
