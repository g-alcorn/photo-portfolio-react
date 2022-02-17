import { React } from 'react';

const NavLink = (props) => {
  
  return (
    <li className="nav-item nav-drop">
      <a href="#" className="icon-button">
        {props.icon} {props.text}
      </a>
    </li>
  );
};

export default NavLink;