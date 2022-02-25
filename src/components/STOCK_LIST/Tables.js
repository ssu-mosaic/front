import styles from "../css/result-table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHammer } from "@fortawesome/free-solid-svg-icons";

function Tables({
  stockId,
  stockName,
  //retailerName,
  stockCnt,
  stockUnit,
  handleEditClick,
  handleDeleteClick,
}) {
  const rowData = {
    stockId: stockId,
    stockName: stockName,
    //retailerName: retailerName,
    stockCnt: stockCnt,
    stockUnit: stockUnit,
  };

  //console.log(retailerAddress);

  return (
    <tr key={stockId} className={styles.screenPage__searchResultTable_items}>
      <td key={"productName_td"}>{stockName}</td>
      {/* <td key={"retailerName_td"}>{retailerName}</td> */}
      <td key={"stockCnt_td"}>{stockCnt}</td>
      <td key={"productUnit_td"}>{stockUnit}</td>
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
        <button type="button" onClick={() => handleDeleteClick(stockId)}>
          {" "}
          <FontAwesomeIcon icon={faTimes} size="2x" />{" "}
        </button>
      </td>
    </tr>
  );
}

export default Tables;
