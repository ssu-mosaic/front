import styles from "../css/result-table.module.css";
////import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Tables({ orderId, orderDate, orderProducts, onOrderDetailClick }) {
  const orderTotal = orderProducts.length;
  let orderComplete = 0;
  let orderCanceled = 0;

  for (let index = 0; index < orderTotal; index++) {
    if (orderProducts[index].orderStatus === "canceled") {
      orderCanceled++;
    } else if (orderProducts[index].orderStatus === "complete") {
      orderComplete++;
    }
  }

  return (
    <tr key={orderId} className={styles.screenPage__searchResultTable_items}>
      <td key={"orderId_td"}>{orderId}</td>
      <td key={"orderDate_td"}>{orderDate}</td>
      <td
        key={"orderProducts_td"}
        onClick={(event) => onOrderDetailClick(event, orderProducts, orderId)}
      >
        {`거래처 ${orderProducts[0].retailerName}`}
        {orderProducts.length < 2 ? "" : `, ${orderProducts[1].retailerName} `}
        {orderProducts.length > 2 ? "등 " : ""}
        {`에서 ${orderProducts.length} 건의 상품`}
      </td>
      <td key={"orderProgress_td"}>{`${(
        (orderComplete / (orderTotal - orderCanceled)) *
        100
      ).toFixed(1)} %`}</td>
    </tr>
  );
}

export default Tables;
