import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import PropTypes from "prop-types";
import QnaList from "../components/QNA/qnaList";

function CustomerCenter({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <QnaList />
      </div>
    </div>
  );
}

CustomerCenter.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default CustomerCenter;
