import { React } from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavLink = (props) => {
  let dest = '/' + props.text;

  return (
    <li className="nav-item nav-drop">
      <Link to={dest} className="icon-button">
        {props.icon} {props.text}
      </Link>
      <Outlet />
    </li>
  );
};

export default NavLink;