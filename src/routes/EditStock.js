import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import EditForStock from "../components/edit-stock";
import PropTypes from "prop-types";

function EditStock({sideMenu}){

    return(
        <div>
            <MenuBar/>
            <div className={styles.screenPage}>
                <SideMenuBar sideMenu={sideMenu}/>
                <EditForStock/>
            </div>
            
        </div>

    
    );
}

EditStock.propTypes ={

    sideMenu : PropTypes.object.isRequired,
};

export default EditStock;