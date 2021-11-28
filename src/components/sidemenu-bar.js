import styles from "./css/sidemenu-bar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function SideMenuBar(){

    return(
        <div className={styles.screenPage__sidemenu}>

            <div className={`${styles.screenPage__sidemenu_blue} ${styles.screenPage__sidemenu_attr}`}>
                <span>즐겨찾기</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>

            <div className={`${styles.screenPage__sidemenu_white} ${styles.screenPage__sidemenu_attr}`}>
                <span>발주등록</span>
            </div>            

            <div className={`${styles.screenPage__sidemenu_white} ${styles.screenPage__sidemenu_attr}`}>
                <span>발주확정</span>
            </div>

            <div className={`${styles.screenPage__sidemenu_white} ${styles.screenPage__sidemenu_attr}`}>
                <span>발주조회</span>
            </div>
            
        </div>

    );

}

export default SideMenuBar;