import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
//import SearchOrderResultTable from "./search-order-result";
import Basket from "../BASKET_LIST/tableRender";
import { Link } from "react-router-dom";
import axios from "axios";

let userID = localStorage.getItem("USER_ID");

function BasketDetail() {
  const baseURL =
    "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com";

  const onOrderClick = (event) => {
    event.preventDefault();
    const orderForm = {
      userId: userID,
    };

    axios.post(`${baseURL}/order/checkout`, orderForm).then((response) => {
      if (response.data !== null) {
        alert("Order complete");
        //test
        window.location.href = "/order/requestorder/basket";
        //publish
        // window.location.href =
        //   "https://ssu-mosaic.github.io/order/requestorder/basket";
      } else {
        alert("order failed");
      }
    });
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Cart</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={"/order/requestorder"}>
          <input type="button" value="retailer" />
        </Link>
        <input
          type="button"
          onClick={(event) => onOrderClick(event)}
          value="order"
        />
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>Cart</span>
        </div>
        <Basket />
      </div>
    </div>
  );
}

export default BasketDetail;
