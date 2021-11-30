import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import SearchForOrder from "../components/search-order";

function SearchOrder(){

    return(
        <div>
            <MenuBar/>
            <div className={styles.screenPage}>
                <SideMenuBar/>
                <SearchForOrder/>
            </div>
            
        </div>

    
    );
}

export default SearchOrder;