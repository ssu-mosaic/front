import styles from "./css/menu-bar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSignOutAlt , faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import logo from '../image/logo.JPG';

let userID = localStorage.getItem('user')

function MenuBar(){

    return(
        <div className={styles.menuBar}>
            <div className={styles.menuBar__column}>
                <Link to={`/`}> <img src={logo} className={styles.menuBar__logo} alt="logo img" /> </Link>
                {/* <!-- Easy stock logo--> */}
            </div>
            <div className={styles.menuBar__column}>
                <nav className={styles.menuBar__nav}>
                    <ul className={styles.menuBar__list}>
                        <Link to={`/order/searchitem`}><li className={styles.menuBar__btn}><span>발주관리</span></li></Link>
                        <Link to={`/stock`}><li className={styles.menuBar__btn}><span>재고관리</span></li></Link>
                        {/* <Link to={`/`}><li className={styles.menuBar__btn}><span>고객센터</span></li></Link> */}
                    </ul>
                </nav>

            </div>
            <div className={styles.menuBar__column}>
                <div className={styles.menuBar__profile}>
                    <Link to={`/login`}><FontAwesomeIcon icon={faUserCircle} size="2x" /></Link>
                    <Link to={`/login`}><span>{userID}</span></Link>
                    <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
                </div>
                {/* <!--who login and icon--> */}
            </div>
        </div>

    );
}

export default MenuBar;