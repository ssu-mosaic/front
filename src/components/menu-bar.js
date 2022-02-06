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
        <Link to={`/`}>
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
            <Link to={`/order/retailer/add`}>
              <li className={styles.menuBar__btn}>
                <span>발주관리</span>
              </li>
            </Link>
            <Link to={`/stock/add`}>
              <li className={styles.menuBar__btn}>
                <span>재고관리</span>
              </li>
            </Link>
            <Link to={`/user/info`}>
              <li className={styles.menuBar__btn}>
                <span>회원정보</span>
              </li>
            </Link>
            <Link to={`/qna`}>
              <li className={styles.menuBar__btn}>
                <span>문의센터</span>
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
            <span>{userID === "null" ? "로그인해주세요" : userID}</span>
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
