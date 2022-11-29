import { useRef, useState } from "react";
import Company from "./Company";
import Features from "./Features";
import Snap from "./Snap";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Snap />

      <ul>
        <li onClick={handleClick}>
          Features
          <Features className={open ? "show" : "hide"} />
        </li>
        <li onClick={handleClick}>
          Company
          <Company className={open ? "show" : "hide"} />
        </li>
        <li>Careers</li>
        <li>About</li>
      </ul>
    </>
  );
};

export default Navbar;
