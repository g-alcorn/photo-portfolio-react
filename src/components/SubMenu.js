import React from 'react';

const SubMenu = (props) => {
  return (
    <div className="sub-menu">
      {props.children}
    </div>
  );
};

export default SubMenu;