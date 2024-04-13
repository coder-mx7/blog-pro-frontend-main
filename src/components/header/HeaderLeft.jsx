import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
const HeaderLeft = ({ setToggle, toggle }) => {
  return (
    <div className="header-left">
      <Link to="/" className="header-logo">
        <img className="top-logo" src={logo} alt="" srcset="" />
      </Link>
      <div onClick={() => setToggle((prev) => !prev)} className="header-menu">
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
    </div>
  );
};

export default HeaderLeft;
