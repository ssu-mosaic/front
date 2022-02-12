import MenuBar from "../components/admin-menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import InquiryList from "../components/ADMIN_INQUIRY/qnaList";
import PropTypes from "prop-types";

function Inquiry({ sideMenu }) {
  return (
    <div>
      <MenuBar />
      <div className={styles.screenPage}>
        <SideMenuBar sideMenu={sideMenu} />
        <InquiryList />
      </div>
    </div>
  );
}

Inquiry.propTypes = {
  sideMenu: PropTypes.object.isRequired,
};

export default Inquiry;
