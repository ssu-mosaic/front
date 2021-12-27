import contentStyles from "./css/screen-content.module.css";
import styles from "./css/search-order.module.css";
//import SearchOrderResultTable from "./search-order-result";
import RetailerListTable from "./RETAILER_LIST_READONLY/tableRender";
import { Link } from "react-router-dom";

function RequestForOrder(){
    
    return(

        <div className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}>
            <div className={styles.screenPage__searchItem}>
                <span>발주조회</span>
            </div>
            <div className={styles.screenPage__nextButton}>
                <Link to={'/order/confirmitem'}><input type="button" value="거래처목록"/></Link>
            </div>
            <div className={styles.screenPage__searchResult}>
                <div className={styles.screenPage_title}><span>발주목록</span></div>
                <RetailerListTable/>
            </div>
            {/* <div className={styles.screenPage__searchBox}>
                <div className={styles.screenPage_title}><span>검색옵션</span></div>
                <form >
                <div className={`${styles.screenPage__section_column} ${styles.screenPage__searchList}`}>
                        <div className={styles.screenPage__section_row}>
                            <div className={styles.screenPage__searchOption}>
                                <label>선택 거래처 </label> 
                                <input type="text" name="order" disabled/>
                            </div>
                        </div>
                        
                        <div className={styles.screenPage__section_row}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="order">주문서 </label> 
                                <textarea type="text" name="order" required/>
                            </div>

                        </div>
                        
                    </div>
                    <div className={styles.screenPage__section_column}>
                            <input type="submit" value="조회"/>
                    </div>
                </form>
            </div> */}

        </div>
    
    );
}

export default RequestForOrder;