import styles from "../css/result-table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

function EditRow({ stockId, stockName, stockCount, editFormData, handleEditFormChange, handleCancelClick }) {
    
    return (
            <tr key ={stockId} className={styles.screenPage__searchResultTable_items}>
                <td key ={'stockName_edit'}>
                    <input 
                        type="text" 
                        required='required'
                        placeholder = {stockName}
                        name="stockName"
                        value={editFormData.stockName}
                        onChange={handleEditFormChange}
                    ></input>
                </td>
                <td key ={'stockCount_edit'}>
                    <input 
                        type="number" 
                        required='required'
                        placeholder = {stockCount}
                        name="stockCount"
                        value={editFormData.stockCount}
                        onChange={handleEditFormChange}
                    ></input>
                </td>
                <td key ={'button_edit'}> 
                    <button type="submit"> <FontAwesomeIcon icon={faCheck} size="2x" /> </button>
                    <button type="button" onClick={handleCancelClick}> <FontAwesomeIcon icon={faTimes} size="2x" /> </button>
                </td>
                <td key ={'button_delete'}></td>
                
            </tr>
    );
}

export default EditRow;