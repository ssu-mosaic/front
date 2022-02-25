import styles from "../css/result-table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

function EditRow({
  productId,
  productName,
  productPrice,
  productUnit,
  productDetail,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr key={productId} className={styles.screenPage__searchResultTable_items}>
      <td key={"retailerName_edit"}>
        <input
          type="text"
          required="required"
          placeholder={productName}
          name="productName"
          value={editFormData.productName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td key={"retailerPhone_edit"}>
        <input
          type="number"
          required="required"
          placeholder={productPrice}
          name="productPrice"
          value={editFormData.productPrice}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td key={"retailerEmail_edit"}>
        <input
          type="text"
          required="required"
          placeholder={productUnit}
          name="productUnit"
          value={editFormData.productUnit}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td key={"retailerMemo_edit"}>
        <textarea
          type="text"
          required="required"
          placeholder={productDetail}
          name="productDetail"
          value={editFormData.productDetail}
          onChange={handleEditFormChange}
        ></textarea>
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
