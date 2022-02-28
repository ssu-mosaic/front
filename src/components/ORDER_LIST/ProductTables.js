import styles from "../css/result-table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

function ProductTables({
  productId,
  retailerName,
  productName,
  productUnit,
  productCnt,
  orderStatus,
  orderProductId,
  handleCancelClick,
  handleCompleteClick,
}) {
  let orderStatusKor = "";
  if (orderStatus === "CANCELED") {
    orderStatusKor = "취소완료";
  } else if (orderStatus === "COMPLETED") {
    orderStatusKor = "완료";
  } else {
    orderStatusKor = "발주진행중";
  }

  return (
    <tr className={styles.screenPage__searchResultTable_items}>
      <td key={"productName_td"}>{productName}</td>
      <td key={"retailerName_td"}>{retailerName}</td>
      <td key={"productCnt_td"}>{productCnt}</td>
      <td key={"productUnit_td"}>{productUnit}</td>
      <td key={"orderStatus_td"}>{orderStatusKor}</td>
      <td key={"orderCancel_td"}>
        <button
          type="button"
          onClick={(event) =>
            handleCancelClick(event, productId, orderProductId)
          }
          disabled={orderStatus === "CANCELED" || orderStatus === "COMPLETED"}
        >
          {orderStatus === "CANCELED" || orderStatus === "COMPLETED" ? (
            ""
          ) : (
            <FontAwesomeIcon icon={faTimes} size="2x" />
          )}
        </button>
      </td>
      <td key={"orderComplete_td"}>
        <button
          type="button"
          onClick={(event) =>
            handleCompleteClick(event, productId, orderProductId)
          }
          disabled={orderStatus === "CANCELED" || orderStatus === "COMPLETED"}
        >
          {orderStatus === "CANCELED" || orderStatus === "COMPLETED" ? (
            ""
          ) : (
            <FontAwesomeIcon icon={faCheck} size="2x" />
          )}
        </button>
      </td>
    </tr>
  );
}

export default ProductTables;
