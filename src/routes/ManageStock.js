import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import StockManagement from "../components/stock-management";
import PropTypes from "prop-types";

function manageStock({sideMenu}){

    return(
        <div>
            <MenuBar/>
            <div className={styles.screenPage}>
                <SideMenuBar sideMenu={sideMenu}/>
                <StockManagement/>
            </div>
            
        </div>
    
    );
}

manageStock.propTypes ={

    sideMenu : PropTypes.object.isRequired,
};

export default manageStock;