import React, { useState , useEffect } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import Tables from './Tables';
import Pagination from './paginationNoHook';
import Fragment from 'render-fragment';
import styles from "../css/result-table.module.css";
import resultStyles from "./retailer-list-readonly.module.css";
import axios from "axios";

let userID = localStorage.getItem('USER_ID')

function RetailerListTable(){

    const baseURL = "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
    
    // If purpose for testing without server useState(false)
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [tablePerPage] = useState(7);
    const [table , setTable] = useState([]);
    const [request, setRequest] = useState(false);
    const [requestId, setRequestId] = useState("");
    const [requestName, setRequestName] = useState("");
    const [orderDetail, setOrderDetail] = useState("");

    //get data from server
    useEffect(() => {
        // const ApiCallForList = async () => {
        //     const response = await axios.post(`${baseURL}/retailer/list`)
        //     const data = await response.data;
        //     console.log(data);
        //     setTable(data);
        //     setLoading(false);
        //     //return await response.data;
        // }
        // ApiCallForList();
        //setTable(MOCK_DATA);
        const userData = {
            userName: userID
        }

        axios.post(`${baseURL}/retailer/list`,userData)
            .then((response) => {
                setTable(response.data);
                setLoading(false);
            })
        
    },[]);

    // Get current tables
    const indexOfLastTable = currentPage * tablePerPage;
    const indexOfFirstTable = indexOfLastTable - tablePerPage;
    const tables = table.slice(indexOfFirstTable, indexOfLastTable);

    //change page number
    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    const handleRequestClick = (rowData) => {
        
        //console.log(requestData);
        setRequestName(rowData.retailerName);
        setRequestId(rowData.retailerId);
        setRequest(true);
    }

    const onOrderDetailChange = (event) => {
        setOrderDetail(event.target.value);
    }

    const onSubmitOrderClick = () => {
        const submitData = {
            userName:userID,
            retailerId: requestId,
            orderDetail: orderDetail,
        }
        console.log(submitData);
        // const ApiCallForSubmit = async () => {
        //     const response = await axios.post(`${baseURL}/retailer/order`,submitData);
        //     const data = await response.data;
        //     console.log(data);
        axios.post(`${baseURL}/retailer/order/add`,submitData)
            .then((response) => {
                console.log(response.data);
                setTable(response.data);
                setLoading(false);

                if(response.data === true){
                    alert("주문이 완료되었습니다");
                }
            });


            //return await response.data;
        
        //ApiCallForSubmit();

    }

    return (

        <div>
            {loading ? <strong>로딩중...</strong> :
                (
                    <Fragment>
                        <form>
                            <table className={styles.screenPage__searchResultTable}>
                            <thead>
                                <tr className={styles.screenPage__searchResultTable_header}>
                                    <th>거래처 이름</th>
                                    <th>거래처 연락처</th>
                                    <th>거래처 이메일</th>
                                    <th>거래처 주소</th>
                                    <th>거래처 메모</th>
                                    <th>주문선택</th>
                                </tr>
                            </thead>
                
                            <tbody className="testTable__tbody">
                                {
                                    tables.map((tables) => (
                                                <Tables 
                                                key={tables.retailerId}
                                                retailerId={tables.retailerId}
                                                retailerName={tables.retailerName}
                                                retailerPhone={tables.retailerPhone}
                                                retailerEmail={tables.retailerEmail}
                                                retailerAddress={tables.retailerAddress}
                                                retailerMemo={tables.retailerMemo}
                                                handleRequestClick={handleRequestClick}
                                                />
                                        
                                    ))
                                }
                            </tbody>
                            </table>
                        </form>
                        <Pagination tablePerPage={tablePerPage} totalTables={table.length} paginate={paginate}/>
                        {
                            request ? 
                            <Fragment>
                                <div className={`${resultStyles.request__name}`}>
                                    주문상세
                                </div>
                                <div className={resultStyles.request__section}>
                                    <div className={resultStyles.request__column}>
                                        <label for="retailerName">선택 거래처 : </label>
                                        <input type="text" name="retailerName" value={requestName}  disabled/>
                                        <button onClick={onSubmitOrderClick}>주문하기</button>
                                    </div>
                                    <div className={resultStyles.request__column}>
                                        <textarea type="text" onChange={onOrderDetailChange} required/>
                                    </div>
                                </div>
                            </Fragment>
                            : <div></div>
                        }
                    </Fragment>
                )
            
            }
            
        </div>
    )

}

export default RetailerListTable;
