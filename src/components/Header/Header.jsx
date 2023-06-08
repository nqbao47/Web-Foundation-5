
import React, { useState } from 'react';
import './Header.css';

const Header = ({ taskCount, handleAddTask }) => {
  const [showModal, setShowModal] = useState(false);//lưu trữ trạng thái hiển thị modal
  const [newTask, setNewTask] = useState(''); //lưu trữ nội dung công việc mới được nhập vào
  const [selectedStatus, setSelectedStatus] = useState('Completed');//lưu trữ trạng thái đã chọn cho công việc mới

  const handleTaskChange = (event) => {//gọi khi nội dung công việc mới thay đổi
    setNewTask(event.target.value); //dựa trên giá trị đã nhập
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleSubmitTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        content: newTask,
        status: selectedStatus
      };
      // console.log(task);
      handleAddTask(task);
      setNewTask('');
      setSelectedStatus('Completed');
      setShowModal(false);
    } 
    else {
      alert('Warning !! Task Name can not be empty ')
    }
  };

  return (
    <header className="header">
      <button onClick={() => setShowModal(true)} className="header__add-task-button">Add Task</button>
      <span className="header__task-count">Tasks: {taskCount}</span>

      {showModal && (
        <div className="modal"> 
           {/* <div class="modal-backdrop"></div> */}
          <div className="modal__content">
            <p className="modal__add-task">Add Task</p>
            <input 
              type="text" 
              value={newTask} // Giá trị input liên kết với biến newTask
              onChange={handleTaskChange} 
              placeholder="Enter task name"
              // required ?????????
            />

            <p className="modal__categories">Categories</p>
            <select value={selectedStatus} onChange={handleStatusChange}>
              <option value="Completed">Completed</option>
              <option value="Urgent">Urgent</option>
              <option value="Later">Later</option>
              <option value="Processing">Processing</option>
              <option value="All">All</option>
            </select>

            <button className='modal__btn-submitTask' onClick={handleSubmitTask}>Submit Task</button>
            <button className='modal__btn-cancel' onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

