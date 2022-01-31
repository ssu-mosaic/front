import styles from "./css/sidemenu-bar.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function SideMenuBar({ sideMenu }) {
  return (
    <div className={styles.screenPage__sidemenu}>
      <div
        className={`${styles.screenPage__sidemenu_blue} ${styles.screenPage__sidemenu_attr}`}
      >
        <span>{sideMenu.name}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      {sideMenu.elementsObj.map((sideMenuElement) => (
        <Link to={sideMenuElement.link} key={sideMenuElement.id}>
          <div
            className={`${styles.screenPage__sidemenu_white} ${styles.screenPage__sidemenu_attr}`}
          >
            <span>{sideMenuElement.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

SideMenuBar.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default SideMenuBar;
