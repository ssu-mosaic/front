import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import RetailerAdd from "../components/RETAILER_MANAGEMENT/retailer_add";
import PropTypes from "prop-types";

function AddRetailer({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <RetailerAdd />
      </div>
    </div>
  );
}

AddRetailer.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default AddRetailer;
