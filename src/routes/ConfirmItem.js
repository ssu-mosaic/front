import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import ConfirmForItem from "../components/order-confirm";
import PropTypes from "prop-types";

function ConfirmItem({sideMenu}){

    return(
        <div>
            <MenuBar/>
            <div className={styles.screenPage}>
                <SideMenuBar sideMenu={sideMenu}/>
                <ConfirmForItem/>
            </div>
            
        </div>

    
    );
}

ConfirmItem.propTypes ={

    sideMenu : PropTypes.object.isRequired,
};

export default ConfirmItem;