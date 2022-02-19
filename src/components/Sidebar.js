import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className='side-bar'>
      Sidebar
      {props.children}
    </div>
  );
};

export default Sidebar;