import { React } from "react";
import { Link, Outlet } from "react-router-dom";

const DropdownItem = (props) => {
  let dest = '/' + props.text;

  return (
    <div>
      <Link to={dest}>
        {props.text}
      </Link>
      <Outlet />
    </div>
  );
};

export default DropdownItem;