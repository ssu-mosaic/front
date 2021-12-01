import contentStyles from "./css/screen-content.module.css";
import styles from "./css/search-item.module.css";
import SearchItemResultTable from "./search-item-result";

function SearchForItem(){

    return(

        <div className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}>
            <div className={styles.screenPage__searchItem}>
                <span>발주등록</span>
            </div>
            <div className={styles.screenPage__nextButton}>
                <input type="button" value="발주확정"/>
            </div>
            <div className={styles.screenPage__searchBox}>
                <div className={styles.screenPage_title}><span>검색옵션</span></div>
                <form method="get">
                    <div className={`${styles.screenPage__section_row} ${styles.screenPage__searchList}`}>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="orderDate">발주일자 </label> 
                                <input type="date" name="orderDate" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="company">매입거래처 </label> 
                                <input type="text" name="company" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="itemName">물품검색 </label> 
                                <input type="text" name="itemName" required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">검색조건? </label> 
                                <input type="text" name="condition" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">검색조건? </label> 
                                <input type="text" name="condition" required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_column}>
                                <div className={styles.screenPage__searchOption}>
                                    <label for="condition">검색조건? </label> 
                                    <input type="number" name="condition" required/>
                                </div>
                        </div>
                    </div>
                    <div className={styles.screenPage__section_row}>
                            <input type="submit" value="조회"/>
                    </div>
                </form>
            </div>
            <div className={styles.screenPage__searchResult}>
                <div className={styles.screenPage_title}><span>검색결과</span></div>
                <SearchItemResultTable/>
            </div>
        </div>
    
    );
}

export default SearchForItem;