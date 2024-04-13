import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ toggle, setToggle }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <nav
      style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      className="navbar"
    >
      <ul  className="nav-links">
        <Link onClick={() => setToggle(false)} to="/" className="nav-link">
          رئيسية
          <i className="bi bi-house"></i>
        </Link>
        <Link onClick={() => setToggle(false)} to="/posts" className="nav-link">
          منتجات
          <i className="bi bi-stickies"></i>
        </Link>
        {user?.isAdmin &&
        <Link
          onClick={() => setToggle(false)}
          to="/posts/create"
          className="nav-link"
        >
          انشاء منتج
          <i class="bi bi-house-add-fill"></i>
        </Link>
      }
        {user?.isAdmin &&
          <Link
          onClick={() => setToggle(false)}
          to="/admin-dashboard"
          className="nav-link"
        >
          صفحة الادمين
          <i className="bi bi-person-check"></i>
        </Link>}
        <Link
          onClick={() => setToggle(false)}
          to="/about"
          className="nav-link"
        >
          معلومات عنا 
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
