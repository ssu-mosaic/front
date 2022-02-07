import styles from "../css/result-table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHammer } from "@fortawesome/free-solid-svg-icons";

function Tables({
  stockRowId,
  productName,
  retailerName,
  stockCnt,
  productUnit,
  handleEditClick,
  handleDeleteClick,
}) {
  const rowData = {
    stockRowId: stockRowId,
    productName: productName,
    retailerName: retailerName,
    stockCnt: stockCnt,
    productUnit: productUnit,
  };

  //console.log(retailerAddress);

  return (
    <tr key={stockRowId} className={styles.screenPage__searchResultTable_items}>
      <td key={"productName_td"}>{productName}</td>
      <td key={"retailerName_td"}>{retailerName}</td>
      <td key={"stockCnt_td"}>{stockCnt}</td>
      <td key={"productUnit_td"}>{productUnit}</td>
      <td key={"edit_td"}>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, rowData)}
        >
          {" "}
          <FontAwesomeIcon icon={faHammer} size="2x" />{" "}
        </button>
      </td>
      <td key={"delete_td"}>
        <button type="button" onClick={() => handleDeleteClick(stockRowId)}>
          {" "}
          <FontAwesomeIcon icon={faTimes} size="2x" />{" "}
        </button>
      </td>
    </tr>
  );
}

export default Tables;
