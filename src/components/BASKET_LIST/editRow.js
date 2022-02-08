import styles from "../css/result-table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

function EditRow({
  productId,
  productName,
  productPrice,
  productUnit,
  productCnt,
  productDesc,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr key={productId} className={styles.screenPage__searchResultTable_items}>
      <td key={"productName_td"}>{productName}</td>
      <td key={"productPrice_td"}>{productPrice}</td>
      <td key={"productUnit_td"}>{productUnit}</td>
      <td key={"productCnt_td"}>
        <input
          type="number"
          required
          min="1"
          placeholder={productCnt}
          name="productCnt"
          value={editFormData.productCnt}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td key={"productDesc_td"}>
        {productDesc.length > 10
          ? `${productDesc.slice(0, 10)}...`
          : `${productDesc}`}
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
