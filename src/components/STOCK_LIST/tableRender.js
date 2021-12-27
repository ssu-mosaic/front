import React, { useState , useEffect } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import Tables from './Tables';
import EditRow from './editRow';
import Pagination from './paginationNoHook';
import Fragment from 'render-fragment';
import styles from "../css/result-table.module.css";
import axios from "axios";

let userID = localStorage.getItem('USER_ID')

//재고
function StockListTable(){

    const baseURL = "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
    
    // If purpose for testing without server useState(false)
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [tablePerPage] = useState(10);
    const [table , setTable] = useState([]);
    
    //get data from server
    useEffect(() => {
        const userData = {
            userName: userID
        }
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
        axios.post(`${baseURL}/stock/list`,userData)
            .then((response) => {
                setLoading(false);
                console.log(response.data);
                setTable(response.data);
            });
    },[]);

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
            name: userID,
            stockId: rowData.stockId,
            stockName: rowData.stockName,
            stockCount: rowData.stockCount,
        }

        setEditFormData(formValues);
    };
    const [editFormData, setEditFormData] = useState({
        name:userID,
        stockId: "",
        stockName: "",
        stockCount: "",
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
    const handleEditFormSubmit = (event) =>{
        event.preventDefault();

        const editedForm={
            userName:userID,
            stockId: rowId,
            stockName: editFormData.stockName,
            stockCount: editFormData.stockCount,
        }

        // const ApiCallForEdit = async () => {
        //     //const response = 
        //     await axios.post(`${baseURL}/stock/edit`,editedForm)
        //     //const data = await response.data;
        //     //console.log(data);
        // }
        axios.post(`${baseURL}/stock/edit`,editedForm)
        
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
    }

    const handleDeleteClick = (rowId) => {
        const deleteForm={
            stockId: rowId,
            userName: userID,
        }
        // const ApiCallForDelete = async () => {
        //     //const response = 
        //     await axios.post(`${baseURL}/stock/delete`,deleteForm)
        //     //const data = await response.data;
        //     //console.log(data);
        // }
        axios.post(`${baseURL}/stock/delete`,deleteForm)
            .then((response => {
                console.log(response.data);
            }))
        const newTable =  [...table];
        const index = table.findIndex((row) => row.stockId === rowId);
        newTable.splice(index,1);
        setTable(newTable);
        //ApiCallForDelete();
    }

    return (

        <div>
            {loading ? <strong>로딩중...</strong> :
                (
                    <Fragment>
                        <form onSubmit={handleEditFormSubmit}>
                            <table className={styles.screenPage__searchResultTable}>
                            <thead>
                                <tr className={styles.screenPage__searchResultTable_header}>
                                    <th>재고명</th>
                                    <th>잔여재고</th>
                                    <th>수정</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                
                            <tbody className="testTable__tbody">
                                {
                                    tables.map((tables) => (
                                        <Fragment>
                                            {

                                            }
                                            {
                                            rowId === tables.stockId ?                                 
                                                <EditRow 
                                                key={tables.stockId}
                                                stockId={tables.stockId}
                                                stockName={tables.stockName}
                                                stockCount={tables.stockCount}
                                                editFormData={editFormData}
                                                handleEditFormChange={handleEditFormChange}
                                                handleCancelClick={handleCancelClick}
                                                /> 
                                            : 
                                                <Tables 
                                                key={tables.stockId}
                                                stockId={tables.stockId}
                                                stockName={tables.stockName}
                                                stockCount={tables.stockCount}
                                                handleEditClick = {handleEditClick}
                                                handleDeleteClick={handleDeleteClick}
                                                />
                                            }
                                        </Fragment>
                                    ))
                                }
                            </tbody>
                            </table>
                        </form>
                        <Pagination tablePerPage={tablePerPage} totalTables={table.length} paginate={paginate}/>
                    </Fragment>
                )
            
            }
            
        </div>
    )

}

export default StockListTable;
