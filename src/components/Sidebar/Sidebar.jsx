import React from 'react';
import './Sidebar.css';

const Sidebar = ({ handleFilterChange }) => {
  return (
    <aside className="sidebar">
      <h3 className="sidebar__categories">Categories</h3>
      <ul className="sidebar__category-list">
        <li className="sidebar__completed-style" onClick={() => handleFilterChange('Completed')}>Completed</li>
        <li className="sidebar__urgent-style" onClick={() => handleFilterChange('Urgent')}>Urgent</li>
        <li className="sidebar__later-style" onClick={() => handleFilterChange('Later')}>Later</li>
        <li className="sidebar__processing-style" onClick={() => handleFilterChange('Processing')}>Processing</li> 
        <li className="sidebar__all-style" onClick={() => handleFilterChange('All')}>All</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
