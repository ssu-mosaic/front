import React, { useState, useEffect } from "react";
//import MOCK_DATA from "./MOCK_DATA.json";
import Tables from "./Tables";
import Pagination from "./paginationNoHook";
import Fragment from "render-fragment";
import styles from "../css/result-table.module.css";
//import resultStyles from "./retailer-list-readonly.module.css";
import axios from "axios";

let userID = localStorage.getItem("USER_ID");

//발주조회
function OrderList() {
  const baseURL =
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

  // If purpose for testing without server useState(false)
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(7);
  const [table, setTable] = useState([]);
  //const [request, setRequest] = useState(false);
  //const [requestId, setRequestId] = useState("");
  //const [requestName, setRequestName] = useState("");
  //const [orderDetail, setOrderDetail] = useState("");

  //get data from server
  useEffect(() => {
    const userData = {
      userName: userID,
    };
    //console.log(userData);
    // const ApiCallForList = async () => {
    //     const response = await axios.post(`${baseURL}/retailer/orderList`,userName)
    //     const data = await response.data;
    //     console.log(data);
    //     setTable(data);
    //     setLoading(false);
    //     //return await response.data;
    // }
    //ApiCallForList();
    //setTable(MOCK_DATA);
    axios.post(`${baseURL}/order/list`, userData).then((response) => {
      setTable(response.data);
      setLoading(false);
      //console.log(userData);
    });
  }, []);

  // Get current tables
  const indexOfLastTable = currentPage * tablePerPage;
  const indexOfFirstTable = indexOfLastTable - tablePerPage;
  const tables = table.slice(indexOfFirstTable, indexOfLastTable);

  //change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {loading ? (
        <strong>로딩중...</strong>
      ) : (
        <Fragment>
          <form>
            <table className={styles.screenPage__searchResultTable}>
              <thead>
                <tr className={styles.screenPage__searchResultTable_header}>
                  <th>거래처 이름</th>
                  <th>주문 날짜</th>
                  <th>거래처 연락처</th>
                  <th>주문상세</th>
                </tr>
              </thead>
              <tbody className="testTable__tbody">
                {tables.map((tables) => (
                  <Tables
                    key={tables.retailerPhone}
                    retailerName={tables.retailerName}
                    orderDate={tables.orderDate}
                    retailerPhone={tables.retailerPhone}
                    orderDetail={tables.orderDetail}
                  />
                ))}
              </tbody>
            </table>
          </form>
          <Pagination
            tablePerPage={tablePerPage}
            totalTables={table.length}
            paginate={paginate}
          />
        </Fragment>
      )}
    </div>
  );
}

export default OrderList;
