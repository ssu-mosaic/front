import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import RetailerListRead from "../components/RETAILER_MANAGEMENT/retailerList_read";
import PropTypes from "prop-types";

function RetailerList({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <RetailerListRead />
      </div>
    </div>
  );
}

RetailerList.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default RetailerList;
