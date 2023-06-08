import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import useLocalStorage from '../../services/useLocalStorage';

import './TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('All'); // lưu trữ giá trị của bộ lọc hiện tại

  
  const handleAddTask = (task) => {
    const updatedTasks = [...tasks, task];//Tạo bản sao của mảng tasks và thêm công việc mới vào
    setTasks(updatedTasks); //gọi setTasks với danh sách công việc đã cập nhật.
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  const handleStatusChange = (taskId, status) => { //gọi khi trạng thái của một Task thay đổi
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') {
      return true;
    }
    return task.status === filter;
  });

  return (
    <div>
      <Header taskCount={tasks.length} handleAddTask={handleAddTask} />
      <div className="task-manager__container">
        <Sidebar handleFilterChange={handleFilterChange} />
        <Content
          tasks={filteredTasks}
          handleStatusChange={handleStatusChange}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default TaskManager;

