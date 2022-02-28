import styles from "../css/result-table.module.css";
import Fragment from "render-fragment";
////import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Tables({ orderId, orderDate, orderProducts, onOrderDetailClick }) {
  //console.log(orderProducts);

  const orderTotal = orderProducts.length;
  let orderComplete = 0;
  let orderCanceled = 0;

  for (let index = 0; index < orderTotal; index++) {
    if (orderProducts[index].orderStatus === "CANCELED") {
      orderCanceled++;
    } else if (orderProducts[index].orderStatus === "COMPLETED") {
      orderComplete++;
    }
  }

  if (orderProducts.length > 0) {
    return (
      <Fragment>
        <tr
          key={orderId}
          className={styles.screenPage__searchResultTable_items}
        >
          <td key={"orderId_td"}>{orderId}</td>
          <td key={"orderDate_td"}>{orderDate.slice(0, 10)}</td>
          <td
            key={"orderProducts_td"}
            onClick={(event) =>
              onOrderDetailClick(event, orderProducts, orderId)
            }
          >
            {`거래처 ${orderProducts[0].retailerName}`}
            {orderProducts.length < 2
              ? ""
              : `, ${orderProducts[1].retailerName} `}
            {orderProducts.length > 2 ? "등 " : ""}
            {`에서 ${orderProducts.length} 건의 상품`}
          </td>
          <td key={"orderProgress_td"}>{`${(
            (orderComplete / (orderTotal - orderCanceled)) *
            100
          ).toFixed(1)} %`}</td>
        </tr>
      </Fragment>
    );
  } else {
    return null;
  }
}

export default Tables;
