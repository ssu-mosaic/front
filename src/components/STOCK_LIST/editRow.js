import styles from "../css/result-table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

function EditRow({
  stockRowId,
  productName,
  retailerName,
  stockCnt,
  productUnit,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  console.log(editFormData);
  return (
    <tr key={stockRowId} className={styles.screenPage__searchResultTable_items}>
      <td key={"productName_edit"}>
        <input
          type="text"
          required="required"
          placeholder={productName}
          name="productName"
          value={editFormData.productName}
          onChange={handleEditFormChange}
        />
      </td>
      <td key={"retailerName_edit"}>
        <input
          type="text"
          required="required"
          placeholder={retailerName}
          name="retailerName"
          value={editFormData.retailerName}
          onChange={handleEditFormChange}
        />
      </td>
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
          placeholder={productUnit}
          name="productUnit"
          value={editFormData.productUnit}
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
