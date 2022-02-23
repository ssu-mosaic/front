import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
//import SearchOrderResultTable from "./search-order-result";
import Basket from "../BASKET_LIST/tableRender";
import { Link } from "react-router-dom";
import axios from "axios";

let userID = localStorage.getItem("USER_ID");

function BasketDetail() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

  const onOrderClick = (event) => {
    event.preventDefault();
    const orderForm = {
      userId: userID,
    };

    axios.post(`${baseURL}/order/checkout`, orderForm).then((response) => {
      if (response.data === true) {
        alert("주문 완료");
      } else {
        alert("주문 실패 재시도 해주세요");
      }
    });
  };

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
        <input
          type="button"
          onClick={(event) => onOrderClick(event)}
          value="주문하기"
        />
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
