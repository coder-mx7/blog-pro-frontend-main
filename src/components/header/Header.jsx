import "./header.css";
import { useState } from "react";
import Navbar from "./Navbar";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header dir="ltr" className="header">
      <Link to="/" className="header-logo">
      <div class="logo-name">CHAIIMI</div>
    <div class="logo-tagline">TROUSSE</div>
      </Link>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <HeaderRight  />
      
    </header>
  );
};

export default Header;
