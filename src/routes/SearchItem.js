import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import SearchForItem from "../components/search-item";

function SearchItem(){

    return(
        <div>
            <MenuBar/>
            <div className={styles.screenPage}>
                <SideMenuBar/>
                <SearchForItem/>
            </div>
            
        </div>

    
    );
}

export default SearchItem;