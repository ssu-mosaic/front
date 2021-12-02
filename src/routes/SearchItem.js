import MenuBar from "../components/menu-bar";
import styles from "./css/Home.module.css";
import SideMenuBar from "../components/sidemenu-bar";
import SearchForItem from "../components/search-item";
import PropTypes from "prop-types";

function SearchItem({sideMenu}){

    return(
        <div>
            <MenuBar/>
            <div className={styles.screenPage}>
                <SideMenuBar sideMenu={sideMenu}/>
                <SearchForItem/>
            </div>
            
        </div>

    
    );
}

SearchItem.propTypes ={

    sideMenu : PropTypes.object.isRequired,
};

export default SearchItem;