import styles from "./css/menu-bar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../image/logo.JPG";

let userID = localStorage.getItem("USER_ID");

function MenuBar() {
  const onLogoutClick = () => {
    localStorage.setItem("USER_ID", null);
  };

  return (
    <div className={styles.menuBar}>
      <div className={styles.menuBar__column}>
        <Link to={`/admin/notice`}>
          {" "}
          <img
            src={logo}
            className={styles.menuBar__logo}
            alt="logo img"
          />{" "}
        </Link>
        {/* <!-- Easy stock logo--> */}
      </div>
      <div className={styles.menuBar__column}>
        <nav className={styles.menuBar__nav}>
          <ul className={styles.menuBar__list}>
            <Link to={`/admin/notice`}>
              <li className={styles.menuBar__btn}>
                <span>Notice</span>
              </li>
            </Link>
            <Link to={`/admin/inquiry`}>
              <li className={styles.menuBar__btn}>
                <span>QNA</span>
              </li>
            </Link>
            {/* <Link to={`/`}><li className={styles.menuBar__btn}><span>고객센터</span></li></Link> */}
          </ul>
        </nav>
      </div>
      <div className={styles.menuBar__column}>
        <div className={styles.menuBar__profile}>
          <FontAwesomeIcon icon={faUserCircle} size="2x" />
          <Link to={`/login`}>
            <span>{userID === "null" ? "Please Login" : userID}</span>
          </Link>
          <Link to={`/login`}>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size="2x"
              onClick={onLogoutClick}
            />
          </Link>
        </div>
        {/* <!--who login and icon--> */}
      </div>
    </div>
  );
}

export default MenuBar;
