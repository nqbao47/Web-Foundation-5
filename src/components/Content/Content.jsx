
import React, { useState } from 'react';
import { RiEditLine, RiDeleteBinLine, RiSaveLine, RiCloseLine } from 'react-icons/ri'; 
import './Content.css';


const Content = ({ tasks, handleStatusChange, handleDeleteTask }) => {
  const [editTaskId, setEditTaskId] = useState(null); //lưu id của Task đang edit
  const [editedStatus, setEditedStatus] = useState(''); // lưu trạng thái của Task sau khi đã chỉnh sửa

  //Lấy id và trạng thái hiện tại làm đối số
  const handleEditStatus = (taskId, status) => {
    setEditTaskId(taskId);
    setEditedStatus(status);
  };

  const handleCancelEdit = () => {
    setEditTaskId(null);
    setEditedStatus('');
  };

  const handleSaveEdit = (taskId) => {
    handleStatusChange(taskId, editedStatus);
    setEditTaskId(null);
    setEditedStatus('');
  };

  const renderTasks = () => {
    return tasks.map((task) => (
      <div key={task.id} className="task-item">
        <div className="task-item__content">{task.content}</div>
        <div className="task-item__actions">
          {editTaskId === task.id ? (
            <>
              <select
                className="box-optinoal"
                value={editedStatus}
                onChange={(e) => setEditedStatus(e.target.value)}
              >
                <option className="task-item__status--completed" value="Completed">Completed</option>
                <option className="task-item__status--urgent" value="Urgent">Urgent</option>
                <option className="task-item__status--later" value="Later">Later</option>
                <option className="task-item__status--processing" value="Processing">Processing</option>
              </select>
              <button className="btn-save" onClick={() => handleSaveEdit(task.id)}> <RiSaveLine /> </button>
              <button className="btn-cancle" onClick={handleCancelEdit}> <RiCloseLine /> </button>
            </>
          ) : (
            <>
              <div className="task-item__status">{task.status}</div>
              <button className="btn-edit" onClick={() => handleEditStatus(task.id, task.status)}> <RiEditLine /> </button>
              <button className="btn-delete" onClick={() => handleDeleteTask(task.id)}> <RiDeleteBinLine /> </button>
            </>
          )}
        </div>
      </div>
    ));
  };

  return <div className="content">{renderTasks()}</div>;
};

export default Content;


