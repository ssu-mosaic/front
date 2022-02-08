import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import OrderResultTable from "../components/ORDER_MANAGEMENT/order-result";
import PropTypes from "prop-types";

function OrderResult({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <OrderResultTable />
      </div>
    </div>
  );
}

OrderResult.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default OrderResult;
