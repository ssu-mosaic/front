import styles from "../css/result-table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faHammer } from '@fortawesome/free-solid-svg-icons';

let userID = localStorage.getItem('USER_ID')

function Tables({ retailerId, retailerName, retailerPhone, retailerEmail, retailerAddress, retailerMemo, handleEditClick, handleDeleteClick }) {
    
    const rowData = {
        userName : userID,
        retailerId: retailerId,
        retailerName: retailerName,
        retailerPhone: retailerPhone,
        retailerEmail: retailerEmail,
        retailerAddress: retailerAddress,
        retailerMemo: retailerMemo,
    }

    //console.log(retailerAddress);

    return (
            <tr key ={retailerId} className={styles.screenPage__searchResultTable_items}>
                <td key={'retailerName_td'}>{retailerName}</td>
                <td key={'retailerPhone_td'}>{retailerPhone}</td>
                <td key={'retailerEmail_td'}>{retailerEmail}</td>
                <td key={'retailerAddress_td'}>{`${retailerAddress.slice(0,10)}...`}</td>
                <td key={'retailerMemo_td'}>{`${retailerMemo.slice(0,10)}...`}</td>
                <td key={'edit_td'}> 
                    <button type="button" onClick={(event)=> handleEditClick(event, rowData)}> <FontAwesomeIcon icon={faHammer} size="2x" /> </button>
                </td>
                <td key={'delete_td'}>
                    <button type="button" onClick={()=> handleDeleteClick(retailerId)}> <FontAwesomeIcon icon={faTimes} size="2x" /> </button>
                </td>
                    

            </tr>
    );
}

export default Tables;