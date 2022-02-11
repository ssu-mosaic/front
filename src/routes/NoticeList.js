import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import PropTypes from "prop-types";
import Notices from "../components/QNA/noticeList";

function NoticeList({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <Notices />
      </div>
    </div>
  );
}

NoticeList.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default NoticeList;
