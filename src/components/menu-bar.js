import styles from "./css/menu-bar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSignOutAlt , faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import logo from '../image/logo.JPG';

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
                        <li className={styles.menuBar__btn}><Link to={`/order/searchitem`}><span>발주관리</span></Link></li>
                        <li className={styles.menuBar__btn}><Link to={`/order/searchorder`}><span>재고관리</span></Link></li>
                        <li className={styles.menuBar__btn}><Link to={`/`}><span>고객센터</span></Link></li>
                    </ul>
                </nav>

            </div>
            <div className={styles.menuBar__column}>
                <div className={styles.menuBar__profile}>
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                    <Link to={`/login`}><span>이지스톡 01</span></Link>
                    <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
                </div>
                {/* <!--who login and icon--> */}
            </div>
        </div>

    );
}

export default MenuBar;