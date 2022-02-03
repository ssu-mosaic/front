import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import PropTypes from "prop-types";
import QNAWrite from "../components/QNA/qna_write";

function QnaWrite({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <QNAWrite />
      </div>
    </div>
  );
}

QnaWrite.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default QnaWrite;
