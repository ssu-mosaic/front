import styles from "../css/result-table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

let userID = localStorage.getItem("USER_ID");

function Tables({
  productId,
  productName,
  productPrice,
  productUnit,
  productDetail,
  handleEditClick,
  onProductDetailClick,
}) {
  const rowData = {
    userId: userID,
    productId: productId,
    productName: productName,
    productPrice: productPrice,
    productUnit: productUnit,
    productDetail: productDetail,
  };
  const productDetailData = {
    productName: productName,
    productPrice: productPrice,
    productUnit: productUnit,
    productDetail: productDetail,
  };

  //console.log(retailerAddress);

  return (
    <tr
      key={`${productId}_tr`}
      className={styles.screenPage__searchResultTable_items}
    >
      <td
        key={"productName_td"}
        onClick={(event) => onProductDetailClick(event, productDetailData)}
      >
        {productName}
      </td>
      <td key={"productPrice_td"}>{productPrice}</td>
      <td key={"productUnit_td"}>{productUnit}</td>
      <td key={"productDesc_td"}>
        {productDetail.length > 10
          ? `${productDetail.slice(0, 10)}...`
          : `${productDetail}`}
      </td>
      <td key={"edit_td"}>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, rowData)}
        >
          {" "}
          <FontAwesomeIcon icon={faShoppingBag} size="2x" />{" "}
        </button>
      </td>
    </tr>
  );
}

export default Tables;
