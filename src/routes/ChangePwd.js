import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import ChangeUserPwd from "../components/USER_INFO/changePwd";
import PropTypes from "prop-types";

function ChangePwd({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <ChangeUserPwd />
      </div>
    </div>
  );
}

ChangePwd.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default ChangePwd;
