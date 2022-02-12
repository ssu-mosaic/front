import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import Detail from "../components/ADMIN_NOTICE/notice_Details";
import PropTypes from "prop-types";

function NoticeDetails({ sideMenu }) {
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

NoticeDetails.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default NoticeDetails;
