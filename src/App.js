import './App.css';
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { FaPaperPlane, FaUserAlt, FaCameraRetro } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

import Navbar from './components/Navbar';
import NavLink from "./components/NavLink";
import NavDrop from "./components/NavDrop"
import NavTitle from './components/NavTitle';
import DropdownMenu from "./components/DropdownMenu";
import DropdownItem from "./components/DropdownItem";
import Contact from './pages/Contact';
import About from './pages/About';
import Arctic from './pages/Arctic';
import Nature from './pages/Nature';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <NavTitle text="Griffin Alcorn"/>
          <NavDrop text="Photography" icon={<FaCameraRetro/>}>
            <DropdownMenu >
              <DropdownItem text="Nature"/>
              <DropdownItem text="Arctic"/>
            </DropdownMenu>
          </NavDrop>
          <NavLink text="About" icon={<FaUserAlt/>} onClick={() => console.log('about me clicked')}/>
          <NavLink text="Contact" icon={<FaPaperPlane/>}/>
        </Navbar>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/arctic" element={<Arctic />}/>
            <Route path="/nature" element={<Nature />}/>
          </Routes>
          <Outlet/>
        </div>
      </div>
    </Router>

    // <Router>
    //   <div className="app">
    //     <Routes>
    //       <Route path="/">
    //         <Home />

    //         <Route path="contact" >
    //           <Contact />
    //         </Route>

    //         <Route path="about-me" component={Home}/>
    //         <Route path="arctic" component={Arctic}/>
    //         <Route path="nature" component={Home}/> 
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
