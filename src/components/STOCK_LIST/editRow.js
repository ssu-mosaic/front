import styles from "../css/result-table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

function EditRow({
  stockId,
  stockName,
  //retailerName,
  stockCnt,
  stockUnit,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  //console.log(editFormData);
  return (
    <tr key={stockId} className={styles.screenPage__searchResultTable_items}>
      <td key={"productName_edit"}>
        <input
          type="text"
          required="required"
          placeholder={stockName}
          name="stockName"
          value={editFormData.stockName}
          onChange={handleEditFormChange}
        />
      </td>
      {/* <td key={"retailerName_edit"}>
        <input
          type="text"
          required="required"
          placeholder={retailerName}
          name="retailerName"
          value={editFormData.retailerName}
          onChange={handleEditFormChange}
        />
      </td> */}
      <td key={"stockCnt_edit"}>
        <input
          type="number"
          required="required"
          placeholder={stockCnt}
          name="stockCnt"
          value={editFormData.stockCnt}
          onChange={handleEditFormChange}
        />
      </td>
      <td key={"productUnit_edit"}>
        <input
          type="text"
          required="required"
          placeholder={stockUnit}
          name="stockUnit"
          value={editFormData.stockUnit}
          onChange={handleEditFormChange}
        />
      </td>
      <td key={"button_edit"}>
        <button type="submit">
          {" "}
          <FontAwesomeIcon icon={faCheck} size="2x" />{" "}
        </button>
        <button type="button" onClick={handleCancelClick}>
          {" "}
          <FontAwesomeIcon icon={faTimes} size="2x" />{" "}
        </button>
      </td>
      <td key={"button_delete"}></td>
    </tr>
  );
}

export default EditRow;
