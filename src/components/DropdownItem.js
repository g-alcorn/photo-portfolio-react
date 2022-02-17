import { React } from "react";

const DropdownItem = (props) => {
  return (
    <a href="#" className="menu-item" >
      {props.text}
    </a>
  );
}

export default DropdownItem;