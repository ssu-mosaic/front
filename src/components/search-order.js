import contentStyles from "./css/screen-content.module.css";
import styles from "./css/search-order.module.css";
import SearchOrderResultTable from "./search-order-result";
import DateRangePicker from 'rsuite/DateRangePicker';

function SearchForItem(){

    return(

        <div className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}>
            <div className={styles.screenPage__searchItem}>
                <span>발주조회</span>
            </div>
            <div className={styles.screenPage__nextButton}>
                <input type="button" value="발주확정"/>
            </div>
            <div className={styles.screenPage__searchBox}>
                <div className={styles.screenPage_title}><span>검색옵션</span></div>
                <form method="get">
                    <div className={`${styles.screenPage__section_column} ${styles.screenPage__searchList}`}>
                        <div className={styles.screenPage__section_row}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="orderDatePrev">발주기간 </label> 
                                <input type="date" name="orderDatePrev" required/>
                                <label for="orderDateNext"> ~ </label> 
                                <input type="date" name="orderDateNext" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <select>
                                    <option value="xx">기간선택</option>
                                    <option value="today">당일</option>
                                    <option value="week">일주일</option>
                                    <option value="month">1개월</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_row}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">매입거래처 </label> 
                                <input type="text" name="condition" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">물품명 </label> 
                                <input type="text" name="condition" required/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.screenPage__section_column}>
                            <input type="submit" value="조회"/>
                    </div>
                </form>
            </div>
            <div className={styles.screenPage__searchResult}>
                <div className={styles.screenPage_title}><span>발주목록</span></div>
                <SearchOrderResultTable/>
            </div>
        </div>
    
    );
}

export default SearchForItem;