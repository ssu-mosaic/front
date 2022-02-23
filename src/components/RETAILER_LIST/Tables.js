import styles from "../css/result-table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHammer } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

let userID = localStorage.getItem("USER_ID");

function Tables({
  retailerId,
  retailerName,
  retailerPhoneNo,
  retailerEmail,
  retailerDetail,
  handleEditClick,
  handleDeleteClick,
}) {
  const rowData = {
    userId: userID,
    retailerId: retailerId,
    retailerName: retailerName,
    retailerPhoneNo: retailerPhoneNo,
    retailerEmail: retailerEmail,
    retailerDetail: retailerDetail,
  };

  //console.log(retailerAddress);

  return (
    <tr key={retailerId} className={styles.screenPage__searchResultTable_items}>
      <td key={"retailerName_td"}>
        <Link to={`/order/retailer/${retailerId}`}>{retailerName}</Link>
      </td>
      <td key={"retailerPhone_td"}>{retailerPhoneNo}</td>
      <td key={"retailerEmail_td"}>{retailerEmail}</td>
      <td key={"retailerMemo_td"}>
        {retailerDetail.length > 10
          ? `${retailerDetail.slice(0, 10)}...`
          : `${retailerDetail}`}
      </td>
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
        <button type="button" onClick={() => handleDeleteClick(retailerId)}>
          {" "}
          <FontAwesomeIcon icon={faTimes} size="2x" />{" "}
        </button>
      </td>
    </tr>
  );
}

export default Tables;
