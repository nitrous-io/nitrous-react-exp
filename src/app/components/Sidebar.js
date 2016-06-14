import '../css/Sidebar.sass';
import React from 'react';
import FileTree from './FileTree';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <FileTree />
    </div>
  );
}

export default Sidebar;
