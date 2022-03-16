import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
//import SearchOrderResultTable from "./search-order-result";
import RetailerListTable from "../RETAILER_LIST_READONLY/tableRender";
import { Link } from "react-router-dom";

function RequestForOrder() {
  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Order</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={"/order/requestorder/basket"}>
          <input type="button" value="cart" />
        </Link>
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

export default RequestForOrder;
