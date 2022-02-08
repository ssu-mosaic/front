import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import RetailerDetail from "../components/ORDER_MANAGEMENT/retailer_details";
//import SearchForOrder from "../components/search-order";
import PropTypes from "prop-types";

function OrderRequestProduct({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <RetailerDetail />
      </div>
    </div>
  );
}

OrderRequestProduct.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default OrderRequestProduct;
