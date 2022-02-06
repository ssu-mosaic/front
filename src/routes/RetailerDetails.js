import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import Detail from "../components/RETAILER_MANAGEMENT/retailer_details";
import PropTypes from "prop-types";

function RetailerDetails({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <Detail />
      </div>
    </div>
  );
}

RetailerDetails.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default RetailerDetails;
