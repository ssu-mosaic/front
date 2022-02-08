import React, { useState, useEffect } from "react";
import Tables from "./Tables";
import EditRow from "./editRow";
import Pagination from "./paginationNoHook";
import Fragment from "render-fragment";
import styles from "../css/result-table.module.css";
import axios from "axios";

//test
import TEST_STOCK_DATA from "./MOCK_DATA.json";

let userID = localStorage.getItem("USER_ID");

//재고
function StockListTable() {
  const baseURL =
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

  // If purpose for testing without server useState(false)
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(10);
  const [table, setTable] = useState([]);

  //get data from server
  useEffect(() => {
    const userData = {
      userId: userID,
    };
    // const ApiCallForList = async () => {
    //     const response = await axios.post(`${baseURL}/stock/list`,userData)
    //     const data = await response.data;
    //     console.log(data);
    //     setTable(data);
    //     setLoading(false);
    //     //return await response.data;
    // }
    // //ApiCallForList();
    // setTable(MOCK_DATA);
    axios.post(`${baseURL}/stock`, userData).then((response) => {
      setLoading(false);
      console.log(response.data);
      setTable(response.data);
    });

    // only for testing erase when real
    setTable(TEST_STOCK_DATA);
  }, []);

  // Get current tables
  const indexOfLastTable = currentPage * tablePerPage;
  const indexOfFirstTable = indexOfLastTable - tablePerPage;
  const tables = table.slice(indexOfFirstTable, indexOfLastTable);

  //change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //edit data
  const [rowId, setRowId] = useState(null);
  const handleEditClick = (event, rowData) => {
    event.preventDefault();
    setRowId(rowData.stockRowId);

    const formValues = {
      userId: userID,
      stockRowId: rowData.stockRowId,
      retailerName: rowData.retailerName,
      productName: rowData.productName,
      stockCnt: rowData.stockCnt,
      productUnit: rowData.productUnit,
    };

    setEditFormData(formValues);
  };
  const [editFormData, setEditFormData] = useState({
    userId: userID,
    stockRowId: "",
    productName: "",
    retailerName: "",
    stockCnt: -1,
    productUnit: "",
  });
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  //save changes
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedForm = {
      userId: userID,
      stockRowId: rowId,
      productName: editFormData.productName,
      retailerName: editFormData.retailerName,
      stockCnt: editFormData.stockCnt,
      productUnit: editFormData.productUnit,
    };

    // const ApiCallForEdit = async () => {
    //     //const response =
    //     await axios.post(`${baseURL}/stock/edit`,editedForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios.put(`${baseURL}/stock`, editedForm).then((response) => {
      if (response.data === true) {
        alert("재고 정보 수정 완료");
      } else {
        alert("재고 정보 수정 실패 재시도 해주세요");
      }
    });

    const newTable = [...table];
    const index = table.findIndex((row) => row.stockRowId === rowId);

    newTable[index] = editedForm;
    //console.log(newTable);
    setTable(newTable);
    //ApiCallForEdit();
    setRowId(null);
    //console.log(table);
  };

  const handleCancelClick = () => {
    setRowId(null);
  };

  const handleDeleteClick = (rowId) => {
    const deleteForm = {
      stockRowId: rowId,
      userId: userID,
    };
    // const ApiCallForDelete = async () => {
    //     //const response =
    //     await axios.post(`${baseURL}/stock/delete`,deleteForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios.delete(`${baseURL}/stock`, deleteForm).then((response) => {
      if (response.data === true) {
        alert("재고 정보 삭제 완료");
      } else {
        alert("재고 정보 삭제 실패 재시도 해주세요");
      }
    });
    const newTable = [...table];
    const index = table.findIndex((row) => row.stockRowId === rowId);
    newTable.splice(index, 1);
    setTable(newTable);
    //ApiCallForDelete();
  };

  return (
    <div>
      {loading ? (
        <strong>로딩중...</strong>
      ) : (
        <Fragment>
          <form onSubmit={handleEditFormSubmit}>
            <table className={styles.screenPage__searchResultTable}>
              <thead>
                <tr className={styles.screenPage__searchResultTable_header}>
                  <th>재고이름</th>
                  <th>거래처이름</th>
                  <th>잔여재고</th>
                  <th>재고단위</th>
                  <th>수정</th>
                  <th>삭제</th>
                </tr>
              </thead>

              <tbody className="testTable__tbody">
                {tables.map((tables) => (
                  <Fragment key={`${tables.stockRowId}_fragment`}>
                    {rowId === tables.stockRowId ? (
                      <EditRow
                        key={tables.stockRowId}
                        stockRowId={tables.stockRowId}
                        productName={tables.productName}
                        retailerName={tables.retailerName}
                        stockCnt={tables.stockCnt}
                        productUnit={tables.productUnit}
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <Tables
                        key={tables.stockRowId}
                        stockRowId={tables.stockRowId}
                        productName={tables.productName}
                        retailerName={tables.retailerName}
                        stockCnt={tables.stockCnt}
                        productUnit={tables.productUnit}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
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

export default StockListTable;
