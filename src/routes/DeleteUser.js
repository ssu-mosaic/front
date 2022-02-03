import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import DeleteUserInfo from "../components/USER_INFO/deleteUserInfo";
import PropTypes from "prop-types";

function UserDelete({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <DeleteUserInfo />
      </div>
    </div>
  );
}

UserDelete.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default UserDelete;
