import contentStyles from "./css/screen-content.module.css";
import styles from "./css/search-item.module.css";
import { Link } from "react-router-dom";
//import SearchItemResultTable from "./search-item-result";

function SearchForItem(){

    return(

        <div className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}>
            <div className={styles.screenPage__searchItem}>
                <span>거래처등록</span>
            </div>
            <div className={styles.screenPage__nextButton}>
                <Link to={'/order/confirmitem'}><input type="button" value="발주주문"/></Link>
            </div>
            <div className={styles.screenPage__searchBox}>
                <div className={styles.screenPage_title}><span>거래처정보입력</span></div>
                <form method="get">
                    <div className={`${styles.screenPage__section_row} ${styles.screenPage__searchList}`}>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="company">거래처정보 </label> 
                                <input type="text" name="company" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="company">거래처정보 </label> 
                                <input type="text" name="company" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="itemName">거래처정보 </label> 
                                <input type="text" name="itemName" required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">거래처정보? </label> 
                                <input type="text" name="condition" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">거래처정보? </label> 
                                <input type="text" name="condition" required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_column}>
                                <div className={styles.screenPage__searchOption}>
                                    <label for="condition">거래처정보? </label> 
                                    <input type="number" name="condition" required/>
                                </div>
                        </div>
                    </div>
                    <div className={styles.screenPage__section_row}>
                            <input type="submit" value="등록"/>
                    </div>
                </form>
            </div>
            <div className={styles.screenPage__searchResult}>
                <div className={styles.screenPage_title}><span></span></div>
            </div>
        </div>
    
    );
}

export default SearchForItem;