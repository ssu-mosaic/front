import React, { useState , useEffect } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import Tables from './Tables';
import EditRow from './editRow';
import Pagination from './paginationNoHook';
import Fragment from 'render-fragment';
import './table.css'

function PaginationTableRender(){

    
    const [currentPage, setCurrentPage] = useState(1);
    const [tablePerPage] = useState(10);
    const [table , setTable] = useState([]);
    
    //get data from server
    useEffect(() => {
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
        setRowId(rowData.id);
        
        const formValues = {
            id: rowData.id,
            first_name: rowData.first_name,
            last_name: rowData.last_name,
            email: rowData.email,
            dAteofbirth: rowData.dAteofbirth,
            age: rowData.age,
            country: rowData.country,
            phine: rowData.phine
        }

        setEditFormData(formValues);
    };
    const [editFormData, setEditFormData] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        dAteofbirth: "",
        age: "",
        country: "",
        phine: ""
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
            id: rowId,
            first_name: editFormData.first_name,
            last_name: editFormData.last_name,
            email: editFormData.email,
            dAteofbirth: editFormData.dAteofbirth,
            age: editFormData.age,
            country: editFormData.country,
            phine: editFormData.phine
        }
        
        const newTable = [...table];
        const index = table.findIndex((row) => row.id === rowId);

        newTable[index] = editedForm;
        //console.log(newTable);
        setTable(newTable);
        setRowId(null);
        //console.log(table);
    };

    const handleCancelClick = () => {
        setRowId(null);
    }

    const handleDeleteClick = (rowId) => {
        const newTable =  [...table];
        const index = table.findIndex((row) => row.id === rowId);
        newTable.splice(index,1);
        setTable(newTable);
    }

    return (

        <div>
            <form onSubmit={handleEditFormSubmit}>
                <table className="testTable">
                    <thead className="testTable__thead">
                        <tr>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>email</th>
                            <th>dAteofbirth</th>
                            <th>age</th>
                            <th>country</th>
                            <th>phine</th>
                            <th>edit?</th>
                        </tr>
                    </thead>
                
                    <tbody className="testTable__tbody">
                        {
                            tables.map((tables) => (
                                <Fragment>
                                    {
                                    rowId === tables.id ?                                 
                                        <EditRow 
                                        key={tables.id}
                                        id={tables.id}
                                        first_name={tables.first_name}
                                        last_name={tables.last_name}
                                        email={tables.email}
                                        birth={tables.dAteofbirth}
                                        age={tables.age}
                                        country={tables.country}
                                        phone={tables.phine}
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                        /> 
                                    : 
                                        <Tables 
                                        key={tables.id}
                                        id={tables.id}
                                        first_name={tables.first_name}
                                        last_name={tables.last_name}
                                        email={tables.email}
                                        birth={tables.dAteofbirth}
                                        age={tables.age}
                                        country={tables.country}
                                        phone={tables.phine}
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
        </div>
    )

}

export default PaginationTableRender;
