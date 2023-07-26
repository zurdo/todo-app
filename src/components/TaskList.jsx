import { TaskTarget } from './TaskTarget';

export const TaskList = ({ title, taskList, toggleDone, showDone = false }) => {
  const TaskTable = doneValue => {
    return taskList
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskTarget task={task} key={task.id} toggleDone={toggleDone} />
      ));
  };

  return (
    <div className='tasks-container'>
      <h1>{title}</h1>
      {TaskTable(showDone)}
    </div>
  );
};
