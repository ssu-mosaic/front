import MenuBar from "../components/admin-menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import NoticeList from "../components/ADMIN_NOTICE/noticeList";
import PropTypes from "prop-types";

function Notice({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <NoticeList />
      </div>
    </div>
  );
}

Notice.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default Notice;
