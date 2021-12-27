import React, { useState , useEffect } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import Tables from './Tables';
import EditRow from './editRow';
import Pagination from './paginationNoHook';
import Fragment from 'render-fragment';
import styles from "../css/result-table.module.css";
import axios from "axios";

let userID = localStorage.getItem('USER_ID')

function RetailerListTable(){

    const baseURL = "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
    
    // If purpose for testing without server useState(false)
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [tablePerPage] = useState(10);
    const [table , setTable] = useState([]);
    
    //get data from server
    useEffect(() => {
        const ApiCallForList = async () => {
            const response = await axios.post(`${baseURL}/retailer/list`)
            const data = await response.data;
            console.log(data);
            setTable(data);
            setLoading(false);
            //return await response.data;
        }
        //ApiCallForList();
        setTable(MOCK_DATA);
        
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
        setRowId(rowData.retailerId);
        
        const formValues = {
            name: userID,
            retailerId: rowData.retailerId,
            retailerName: rowData.retailerName,
            retailerPhone: rowData.retailerPhone,
            retailerEmail: rowData.retailerEmail,
            retailerAddress: rowData.retailerAddress,
            retailerMemo: rowData.retailerMemo,
        }

        setEditFormData(formValues);
    };
    const [editFormData, setEditFormData] = useState({
        name: userID,
        retailerId: "",
        retailerName: "",
        retailerPhone: "",
        retailerEmail: "",
        retailerAddress: "",
        retailerMemo: "",
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
            name:userID,
            retailerId: rowId,
            retailerName: editFormData.retailerName,
            retailerPhone: editFormData.retailerPhone,
            retailerEmail: editFormData.retailerEmail,
            retailerAddress: editFormData.retailerAddress,
            retailerMemo: editFormData.retailerMemo,
        }

        const ApiCallForEdit = async () => {
            //const response = 
            await axios.post(`${baseURL}/retailer/edit`,editedForm)
            //const data = await response.data;
            //console.log(data);
        }
        
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
    }

    const handleDeleteClick = (rowId) => {
        const deleteForm={
            name:userID,
            retailerId: rowId,
        }
        const ApiCallForDelete = async () => {
            //const response = 
            await axios.post(`${baseURL}/retailer/delete`,deleteForm)
            //const data = await response.data;
            //console.log(data);
        }
        const newTable =  [...table];
        const index = table.findIndex((row) => row.retailerId === rowId);
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
                                    <th>거래처 이름</th>
                                    <th>거래처 연락처</th>
                                    <th>거래처 이메일</th>
                                    <th>거래처 주소</th>
                                    <th>거래처 메모</th>
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
                                            rowId === tables.retailerId ?                                 
                                                <EditRow 
                                                key={tables.retailerId}
                                                retailerId={tables.retailerId}
                                                retailerName={tables.retailerName}
                                                retailerPhone={tables.retailerPhone}
                                                retailerEmail={tables.retailerEmail}
                                                retailerAddress={tables.retailerAddress}
                                                retailerMemo={tables.retailerMemo}
                                                editFormData={editFormData}
                                                handleEditFormChange={handleEditFormChange}
                                                handleCancelClick={handleCancelClick}
                                                /> 
                                            : 
                                                <Tables 
                                                key={tables.retailerId}
                                                retailerId={tables.retailerId}
                                                retailerName={tables.retailerName}
                                                retailerPhone={tables.retailerPhone}
                                                retailerEmail={tables.retailerEmail}
                                                retailerAddress={tables.retailerAddress}
                                                retailerMemo={tables.retailerMemo}
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

export default RetailerListTable;
