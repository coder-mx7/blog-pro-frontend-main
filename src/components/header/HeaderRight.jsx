import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logautuser } from "../../redux/apicalls/authapicalls";
const HeaderRight = () => {
  const { user } = useSelector((state) => state.auth);
  const [dropdown, setdropdown] = useState(false);
  const dispath = useDispatch();

  const nav = useNavigate();
  const formSubmitHandler = () => {
    dispath(logautuser());
    setdropdown(false);
    nav("/");
  };

  return (
    <div className="header-right">
      {user ? (
        <>
          <div className="header-right-info-user">
            <div
              onClick={() => setdropdown((prv) => !prv)}
              className="continaruser"
            >
              <img
                src={user.profilePhoto.url}
                alt="user"
                className="image-header-info"
              />
              <span className="user-info-header">{user.username}</span>
            </div>
            {dropdown && (
              <div className="header-drop">
                <div className="header-right-dropdown">
                  <Link
                    className="header-dropdown-item"
                    onClick={() => setdropdown(false)}
                    to={`/profile/${user._id}`}
                  >
                    <i className="bi bi-file-person"></i>
                    <span>Profile</span>
                  </Link>
                  <div
                    onClick={formSubmitHandler}
                    className="header-dropdown-item"
                  >
                    <i className="bi bi-box-arrow-in-left"></i>
                    <span>Logaut</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <Link className="header-right-link" to="/login">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </Link>
          <Link className="header-right-link" to="/register">
            <i className="bi bi-person-plus"></i>
            <span>Register</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default HeaderRight;
