import { React } from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavTitle = (props) => {
  return (
    <li className="nav-title">
      <Link to="/">
        {props.text}
      </Link>
      <Outlet />
    </li>
  );
};

export default NavTitle;