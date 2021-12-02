import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import MainMenuContentSector from "../components/main-menu-content-sector";
import PropTypes from "prop-types";

function Home({sideMenu}){

    return(
        <div>
            <MenuBar/>
            <div className={styles.screenPage}>
                <SideMenuBar sideMenu={sideMenu}/>
                <MainMenuContentSector/>
            </div>
            
        </div>

    
    );
}

Home.propTypes ={

    sideMenu : PropTypes.object.isRequired,
};

export default Home;