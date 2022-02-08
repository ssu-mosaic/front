import styles from "../css/result-table.module.css";
import { Link } from "react-router-dom";

function Tables({
  retailerId,
  retailerName,
  retailerPhoneNo,
  retailerEmail,
  retailerDesc,
}) {
  //console.log(retailerAddress);

  return (
    <tr key={retailerId} className={styles.screenPage__searchResultTable_items}>
      <td key={"retailerName_td"}>
        <Link to={`/order/requestorder/${retailerId}`}>{retailerName}</Link>
      </td>
      <td key={"retailerPhone_td"}>{retailerPhoneNo}</td>
      <td key={"retailerEmail_td"}>{retailerEmail}</td>
      <td key={"retailerMemo_td"}>
        {retailerDesc.length > 30
          ? `${retailerDesc.slice(0, 30)}...`
          : `${retailerDesc}`}
      </td>
    </tr>
  );
}

export default Tables;
