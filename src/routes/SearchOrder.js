import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import SearchForOrder from "../components/search-order";
import PropTypes from "prop-types";

function SearchOrder({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <SearchForOrder />
      </div>
    </div>
  );
}

SearchOrder.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default SearchOrder;
