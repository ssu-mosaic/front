import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import RequestForOrder from "../components/order-request";
//import SearchForOrder from "../components/search-order";
import PropTypes from "prop-types";

function OrderRequest({sideMenu}){

    return(
        <div>
            <MenuBar/>
            <div className={styles.screenPage}>
                <SideMenuBar sideMenu={sideMenu}/>
                <RequestForOrder/>
            </div>
            
        </div>

    
    );
}

OrderRequest.propTypes ={

    sideMenu : PropTypes.object.isRequired,
};

export default OrderRequest;