import { React, useState } from 'react';

const NavDrop = (props) => {
  const [open, setOpen] = useState(false);
  
  return (
    <li className="nav-item nav-drop">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon} {props.text}
      </a>

      {open && props.children}
    </li>
  );
};

export default NavDrop;