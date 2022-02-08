import React, { useState, useEffect } from "react";
import Tables from "./Tables";
import Pagination from "./paginationNoHook";
import Fragment from "render-fragment";
import styles from "../css/result-table.module.css";
import axios from "axios";

//only for testing
import TEST_RETAILER_DATA from "./MOCK_DATA.json";

let userID = localStorage.getItem("USER_ID");

//거래처목록
function RetailerListTable() {
  const baseURL =
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

  // If purpose for testing without server useState(false)
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(10);
  const [table, setTable] = useState([]);

  useEffect(() => {
    const userData = {
      userId: userID,
    };
    axios.post(`${baseURL}/order`, userData).then((response) => {
      //console.log(response.data);
      setTable(response.data);
      setLoading(false);
    });
    //only for testing erase when real
    setTable(TEST_RETAILER_DATA);
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
          <table className={styles.screenPage__searchResultTable}>
            <thead>
              <tr className={styles.screenPage__searchResultTable_header}>
                <th>거래처 이름</th>
                <th>거래처 연락처</th>
                <th>거래처 이메일</th>
                <th>거래처 메모</th>
              </tr>
            </thead>

            <tbody className="testTable__tbody">
              {tables.map((tables) => (
                <Fragment key={`${tables.retailerId}_fragment`}>
                  <Tables
                    key={tables.retailerId}
                    retailerId={tables.retailerId}
                    retailerName={tables.retailerName}
                    retailerPhoneNo={tables.retailerPhoneNo}
                    retailerEmail={tables.retailerEmail}
                    retailerDesc={tables.retailerDesc}
                  />
                </Fragment>
              ))}
            </tbody>
          </table>

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

export default RetailerListTable;
