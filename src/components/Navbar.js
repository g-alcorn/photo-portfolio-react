import React, { useState } from "react";
import NavItem from "./NavItem";
import { FaPaperPlane, FaUserAlt, FaCameraRetro } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(0);


  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem text="Photography" icon={<FaCameraRetro/>} onClick={() => setOpen(!open)}>
          {/*dropdown stuff here*/
          
          }


        </NavItem>
        <NavItem text="About me" icon={<FaUserAlt/>}/>
        <NavItem text="Contact" icon={<FaPaperPlane/>}/>
      </ul>
    </nav>
  );
};

export default Navbar;