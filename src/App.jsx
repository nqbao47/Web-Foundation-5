import React from 'react';
import TaskManager from './components/TaskManager/TaskManager';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1 className='app__heading'>TASK MANAGER</h1>
      <TaskManager />
    </div>
  );
};

export default App;
