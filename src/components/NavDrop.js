import { React, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const NavDrop = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <Link to={useLocation().pathname} className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon} {props.text}
      </Link>
      <Outlet />

      {open && props.children}
    </li>
  );
};

export default NavDrop;