import React, { useState } from 'react';
import TaskBoard from './components/TaskBoard';

const App = () => {
  const initialTasks = {
    today: [],
    tomorrow: [],
    thisWeek: [],
    nextWeek: [],
    unplanned: [
      { id: 'task-1', content: 'Test Task 1' },
      { id: 'task-2', content: 'Test Task 2' },
      { id: 'task-3', content: 'Test Task 3' },
      { id: 'task-4', content: 'Test Task 4' },
      { id: 'task-5', content: 'Test Task 5' },
      { id: 'task-6', content: 'Test Task 6' },
      { id: 'task-7', content: 'Test Task 7' },
      { id: 'task-8', content: 'Test Task 8' },
      { id: 'task-9', content: 'Test Task 9' },
      { id: 'task-10', content: 'Test Task 10' },
    ],
  };

  const [tasks, setTasks] = useState(initialTasks);

  return <TaskBoard tasks={tasks} setTasks={setTasks} />;
};

export default App;
