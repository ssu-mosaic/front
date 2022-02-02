import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import Detail from "../components/QNA/qna_Details";
import PropTypes from "prop-types";

function QnaDetails({ sideMenu }) {
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

QnaDetails.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default QnaDetails;
