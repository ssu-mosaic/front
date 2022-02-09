import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
//import styles fromSearchOrderResultTable from "./search-order-result";
//import { DateRangePicker } from 'rsuite';
//import 'rsuite/dist/rsuite.css';
//import Fragment from 'render-fragment';
import OrderList from "../ORDER_LIST/tableRender";
//import { useState } from "react";
import { Link } from "react-router-dom";

function SearchForItem() {
  //const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  // const onDateChange = (event) =>{
  //     if(Array.isArray(event)){
  //         console.log(event);
  //         setDateRange(event);
  //         console.log(event[0]);
  //     }
  //     else{
  //         setDateRange([new Date(), new Date()]);
  //     }
  // }

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>발주조회</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={"/order/requestorder"}>
          <input type="button" value="발주요청" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>주문목록</span>
        </div>
        <OrderList />
      </div>
    </div>
  );
}

export default SearchForItem;
