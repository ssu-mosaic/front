import styles from "../css/result-table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

function EditRow({
  productId,
  productName,
  productPrice,
  productUnit,
  productDetail,
  //productCnt,
  orderFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr
      key={`edit_${productId}_tr`}
      className={styles.screenPage__searchResultTable_items}
    >
      <td key={"edit_productName_td"}>{productName}</td>
      <td key={"edit_productPrice_td"}>{productPrice}</td>
      <td key={"edit_productUnit_td"}>{productUnit}</td>
      <td key={"edit_productDesc_td"}>{`${productDetail.slice(0, 10)}...`}</td>
      <td key={"edit_button_edit"}>
        <input
          type="number"
          required
          min="1"
          name="productCnt"
          placeholder={`수량(${productUnit})입력`}
          value={orderFormData.productCnt}
          onChange={handleEditFormChange}
        />
        <button type="submit">
          {" "}
          <FontAwesomeIcon icon={faCheck} size="2x" />{" "}
        </button>
        <button type="button" onClick={handleCancelClick}>
          {" "}
          <FontAwesomeIcon icon={faTimes} size="2x" />{" "}
        </button>
      </td>
    </tr>
  );
}

export default EditRow;
