import React, { useState, useEffect } from "react";
import Tables from "./Tables";
import EditRow from "./editRow";
import Pagination from "./paginationNoHook";
import Fragment from "render-fragment";
import styles from "../css/result-table.module.css";
import axios from "axios";

//only for testing
//import TEST_RETAILER_DATA from "./MOCK_DATA.json";

let userID = localStorage.getItem("USER_ID");

//거래처목록
function RetailerListTable() {
  const baseURL =
    "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com:8080";

  // If purpose for testing without server useState(false)
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(10);
  const [table, setTable] = useState([]);

  //get data from server
  //
  //     const ApiCallForList = async () => {
  //         const response = await axios.post(`${baseURL}/retailer/list`)
  //         const data = await response.data;
  //         console.log(data);
  //         setTable(data);
  //         setLoading(false);
  //         //return await response.data;
  //     }
  //     ApiCallForList();
  //     //setTable(MOCK_DATA);

  //

  useEffect(() => {
    const userData = {
      userId: userID,
    };
    axios.post(`${baseURL}/retailer`, userData).then((response) => {
      //console.log(response.data);
      setTable(response.data);
      setLoading(false);
    });
    //only for testing erase when real
    //setTable(TEST_RETAILER_DATA);
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
    setRowId(rowData.retailerId);

    const formValues = {
      userId: userID,
      retailerId: rowData.retailerId,
      retailerName: rowData.retailerName,
      retailerPhoneNo: rowData.retailerPhoneNo,
      retailerEmail: rowData.retailerEmail,
      retailerDetail: rowData.retailerDetail,
    };

    setEditFormData(formValues);
  };
  const [editFormData, setEditFormData] = useState({
    userId: userID,
    retailerId: "",
    retailerName: "",
    retailerPhoneNo: "",
    retailerEmail: "",
    retailerDetail: "",
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
      retailerId: rowId,
      retailerName: editFormData.retailerName,
      retailerPhoneNo: editFormData.retailerPhoneNo,
      retailerEmail: editFormData.retailerEmail,
      retailerDetail: editFormData.retailerDetail,
    };

    // const ApiCallForEdit = async () => {
    //     //const response =
    //     await axios.post(`${baseURL}/retailer/edit`,editedForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios
      .put(`${baseURL}/retailer/edit/${rowId}`, editedForm)
      .then((response) => {
        if (response.data === true) {
          alert("Edited");
        } else {
          alert("edit Canceled");
        }
      });

    const newTable = [...table];
    const index = table.findIndex((row) => row.retailerId === rowId);

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
    //     await axios.post(`${baseURL}/retailer/delete`,deleteForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios.put(`${baseURL}/retailer/${rowId}`, deleteForm).then((response) => {
      if (response.data === true) {
        alert("Deleted");
      } else {
        alert("delete Failed");
      }
    });

    const newTable = [...table];
    const index = table.findIndex((row) => row.retailerId === rowId);
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
                  <th>Retailer Name</th>
                  <th>Phone No</th>
                  <th>Email</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody className="testTable__tbody">
                {tables.map((tables) => (
                  <Fragment key={`${tables.retailerId}_fragment`}>
                    {rowId === tables.retailerId ? (
                      <EditRow
                        key={tables.retailerId}
                        retailerId={tables.retailerId}
                        retailerName={tables.retailerName}
                        retailerPhoneNo={tables.retailerPhoneNo}
                        retailerEmail={tables.retailerEmail}
                        retailerDetail={tables.retailerDetail}
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <Tables
                        key={tables.retailerId}
                        retailerId={tables.retailerId}
                        retailerName={tables.retailerName}
                        retailerPhoneNo={tables.retailerPhoneNo}
                        retailerEmail={tables.retailerEmail}
                        retailerDetail={tables.retailerDetail}
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

export default RetailerListTable;
