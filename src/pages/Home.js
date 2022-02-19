import React from 'react';
import { FaPaperPlane, FaUserAlt, FaCameraRetro } from 'react-icons/fa';

import SliderData from '../components/SliderData';
import ImageSlider from '../components/ImageSlider';
import Navbar from '../components/Navbar';
import NavLink from '../components/NavLink';
import NavDrop from '../components/NavDrop';
import NavTitle from '../components/NavTitle';
import DropdownMenu from '../components/DropdownMenu';
import DropdownItem from '../components/DropdownItem';
import Sidebar from '../components/Sidebar';
import SubMenu from '../components/SubMenu';

const Home = () => {
  return (
    <div className="Home">
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

export default Home;