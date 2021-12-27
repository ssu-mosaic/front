import styles from "../css/result-table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck } from '@fortawesome/free-solid-svg-icons';

function Tables({ retailerId, retailerName, retailerPhone, retailerEmail, retailerAddress, retailerMemo, handleRequestClick }) {
    
    const rowData = {
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
                <td key={'request_td'}>
                    <button type="button" onClick={()=> handleRequestClick(rowData)}> <FontAwesomeIcon icon={faCheck} size="2x" /> </button>
                </td>
                    

            </tr>
    );
}

export default Tables;