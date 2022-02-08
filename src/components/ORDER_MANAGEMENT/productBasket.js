import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
//import SearchOrderResultTable from "./search-order-result";
import Basket from "../BASKET_LIST/tableRender";
import { Link } from "react-router-dom";

function BasketDetail() {
  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>장바구니</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={"/order/requestorder"}>
          <input type="button" value="거래처목록" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>장바구니</span>
        </div>
        <Basket />
      </div>
    </div>
  );
}

export default BasketDetail;
