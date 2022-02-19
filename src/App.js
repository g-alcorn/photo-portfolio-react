import './App.css';
import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FaPaperPlane, FaUserAlt, FaCameraRetro } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

import SliderData from './components/SliderData';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import NavLink from "./components/NavLink";
import NavDrop from "./components/NavDrop"
import NavTitle from './components/NavTitle';
import DropdownMenu from "./components/DropdownMenu";
import DropdownItem from "./components/DropdownItem";
import Sidebar from "./components/Sidebar";
import SubMenu from "./components/SubMenu";


function App() {
  return (
    <div className="App">
      <Navbar>
        <NavTitle text="Griffin Alcorn"/>
        <NavDrop text="Photography" icon={<FaCameraRetro/>}>
          <DropdownMenu >
            <DropdownItem text="Nature"/>
            <DropdownItem text="Arctic"/>
          </DropdownMenu>
        </NavDrop>
        <NavLink text="About me" icon={<FaUserAlt/>} onClick={() => console.log('about me clicked')}/>
        <NavLink text="Contact" icon={<FaPaperPlane/>}/>
      </Navbar>
      <Sidebar><SubMenu>Sub Menu 1</SubMenu></Sidebar>
      
      <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
