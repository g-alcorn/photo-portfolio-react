import React from 'react';

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon} {props.text}
      </a>
    </li>
  );
};

export default NavItem;