import { React, useState } from "react";
import { CSSTransition } from "react-transition-group";

const DropdownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState('main');



  return (
    <div className='dropdown' >
      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
      >
        <div className='menu'>
          {props.children}
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'secondary'} 
        unmountOnExit 
        timeout={500} 
        classNames="menu-secondary"
      >
        <div className='menu'>
          {props.children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;