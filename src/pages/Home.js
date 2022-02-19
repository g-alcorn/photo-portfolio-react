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

const Home = (props) => {
  return (
    <div>
      <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default Home;