import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import ShowEditUserInfo from "../components/showEditUserInfo";
import PropTypes from "prop-types";

function UserInfo({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <ShowEditUserInfo />
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default UserInfo;
