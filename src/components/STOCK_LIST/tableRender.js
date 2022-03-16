import React, { useState, useEffect } from "react";
import Tables from "./Tables";
import EditRow from "./editRow";
import Pagination from "./paginationNoHook";
import Fragment from "render-fragment";
import styles from "../css/result-table.module.css";
import axios from "axios";

//test
//import TEST_STOCK_DATA from "./MOCK_DATA.json";

let userID = localStorage.getItem("USER_ID");

//재고
function StockListTable() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

  // If purpose for testing without server useState(false)
  const [loading, setLoading] = useState(true);
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
      //console.log(response.data);
      setTable(response.data);
    });

    // only for testing erase when real
    //setTable(TEST_STOCK_DATA);
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
    setRowId(rowData.stockId);

    const formValues = {
      userId: userID,
      stockId: rowData.stockId,
      //retailerName: rowData.retailerName,
      stockName: rowData.stockName,
      stockCnt: rowData.stockCnt,
      stockUnit: rowData.stockUnit,
    };

    setEditFormData(formValues);
  };
  const [editFormData, setEditFormData] = useState({
    userId: userID,
    stockId: "",
    stockName: "",
    //retailerName: "",
    stockCnt: -1,
    stockUnit: "",
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
      stockName: editFormData.stockName,
      //retailerName: editFormData.retailerName,
      stockCnt: editFormData.stockCnt,
      stockUnit: editFormData.stockUnit,
    };

    // const ApiCallForEdit = async () => {
    //     //const response =
    //     await axios.post(`${baseURL}/stock/edit`,editedForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios.put(`${baseURL}/stock/edit/${rowId}`, editedForm).then((response) => {
      if (response.data === true) {
        alert("Edited");
      } else {
        alert("edit failed");
      }
    });

    const newTable = [...table];
    const index = table.findIndex((row) => row.stockId === rowId);

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
      userId: userID,
    };
    // const ApiCallForDelete = async () => {
    //     //const response =
    //     await axios.post(`${baseURL}/stock/delete`,deleteForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios.put(`${baseURL}/stock/${rowId}`, deleteForm).then((response) => {
      if (response.data === true) {
        alert("deleted");
      } else {
        alert("delete failed");
      }
    });
    const newTable = [...table];
    const index = table.findIndex((row) => row.stockId === rowId);
    newTable.splice(index, 1);
    setTable(newTable);
    //ApiCallForDelete();
  };

  return (
    <div>
      {loading || table.length === 0 ? (
        <strong>loading...</strong>
      ) : (
        <Fragment>
          <form onSubmit={handleEditFormSubmit}>
            <table className={styles.screenPage__searchResultTable}>
              <thead>
                <tr className={styles.screenPage__searchResultTable_header}>
                  <th>Stock Name</th>
                  {/* <th>거래처이름</th> */}
                  <th>Count</th>
                  <th>Unit</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody className="testTable__tbody">
                {tables.map((tables) => (
                  <Fragment key={`${tables.stockId}_fragment`}>
                    {rowId === tables.stockId ? (
                      <EditRow
                        key={tables.stockId}
                        stockId={tables.stockId}
                        stockName={tables.stockName}
                        //retailerName={tables.retailerName}
                        stockCnt={tables.stockCnt}
                        stockUnit={tables.stockUnit}
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <Tables
                        key={tables.stockId}
                        stockId={tables.stockId}
                        stockName={tables.stockName}
                        //retailerName={tables.retailerName}
                        stockCnt={tables.stockCnt}
                        stockUnit={tables.stockUnit}
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
