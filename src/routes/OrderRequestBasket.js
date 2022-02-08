import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import ProductBasket from "../components/ORDER_MANAGEMENT/productBasket";
//import SearchForOrder from "../components/search-order";
import PropTypes from "prop-types";

function OrderRequestBasket({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <ProductBasket />
      </div>
    </div>
  );
}

OrderRequestBasket.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default OrderRequestBasket;
