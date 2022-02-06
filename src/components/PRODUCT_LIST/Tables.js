import styles from "../css/result-table.module.css";
////import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Tables({ retailerName, orderDate, retailerPhone, orderDetail }) {
  // const rowData = {
  //     retailerName: retailerName,
  //     orderDate: orderDate,
  //     retailerPhone: retailerPhone,
  //     orderDetail: orderDetail,
  // }
  //console.log(orderDetail);
  return (
    <tr
      key={retailerPhone}
      className={styles.screenPage__searchResultTable_items}
    >
      <td key={"retailerName_td"}>{retailerName}</td>
      <td key={"retailerPhone_td"}>{orderDate}</td>
      <td key={"retailerEmail_td"}>{retailerPhone}</td>
      <td key={"orderDetail_td"}>{`${orderDetail.slice(0, 20)}...`}</td>
    </tr>
  );
}

export default Tables;
