import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import MainMenuContentSector from "../components/main-menu-content-sector";

function Home(){

    return(
        <div>
            <MenuBar/>
            <div className={styles.screenPage}>
                <SideMenuBar/>
                <MainMenuContentSector/>
            </div>
            
        </div>

    
    );
}

export default Home;