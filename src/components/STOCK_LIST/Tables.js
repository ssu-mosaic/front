import styles from "../css/result-table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faHammer } from '@fortawesome/free-solid-svg-icons';

function Tables({ stockId, stockName, stockCount, handleEditClick, handleDeleteClick }) {
    
    const rowData = {
        stockId: stockId,
        stockName: stockName,
        stockCount: stockCount,
    }

    //console.log(retailerAddress);

    return (
            <tr key ={stockId} className={styles.screenPage__searchResultTable_items}>
                <td key={'stockName_td'}>{stockName}</td>
                <td key={'stockCount_td'}>{stockCount}</td>
                <td key={'edit_td'}> 
                    <button type="button" onClick={(event)=> handleEditClick(event, rowData)}> <FontAwesomeIcon icon={faHammer} size="2x" /> </button>
                </td>
                <td key={'delete_td'}>
                    <button type="button" onClick={()=> handleDeleteClick(stockId)}> <FontAwesomeIcon icon={faTimes} size="2x" /> </button>
                </td>
                    

            </tr>
    );
}

export default Tables;