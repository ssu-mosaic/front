import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
//import ConfirmItemResultTable from "./order-confirm-result";
import RetailerListTable from "../RETAILER_LIST/tableRender";
import React from "react";
//import { DateRangePicker } from 'rsuite';
//import 'rsuite/dist/rsuite.css';
//import { useState } from "react";
import { Link } from "react-router-dom";

function RetailerListRead() {
  /*
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);

    const onDateChange = (event) =>{
        if(Array.isArray(event)){
            console.log(event);
            setDateRange(event);
            console.log(event[0]);
        }
        else{
            setDateRange([new Date(), new Date()]);
        }
    }
    */
  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Retailer</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={"/order/retailer/add"}>
          <input type="button" value="Add Retailer" />
        </Link>
      </div>
      <div className={styles.screenPage__searchBox}>
        {/* <div className={styles.screenPage_title}><span>검색옵션</span></div>
                <form method="get">
                    <div className={`${styles.screenPage__section_column} ${styles.screenPage__searchList}`}>
                        <div className={styles.screenPage__section_row}>
                            <div className={styles.screenPage__searchOption}>
                                <label>발주기간 </label> 
                                <DateRangePicker size="xs" value={dateRange} onChange={onDateChange} />
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
                </form> */}
      </div>

      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>Retailer</span>
        </div>
        <RetailerListTable />
      </div>
    </div>
  );
}

export default RetailerListRead;
