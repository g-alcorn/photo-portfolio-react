import { React } from 'react';

const NavTitle = (props) => {
  return (
    <li className="nav-title">
      <a href="#">
        {props.text}
      </a>
    </li>
  );
};

export default NavTitle;