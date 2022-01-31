import styles from "./css/result-table.module.css";
import testImg from './test.JPG';

function StockStatusResult(){

    return(
        <table className={styles.screenPage__searchResultTable}>
            <tr className={styles.screenPage__searchResultTable_header}>
                <th scope="col">No.</th>
                <th scope="col">단품코드</th>
                <th scope="col">단품명</th>
                <th scope="col">상품이미지</th>
                <th scope="col">창고현재고</th>
                <th scope="col">발주단위</th>
                <th scope="col">발주단가{`(단위)`}</th>
                <th scope="col">물품구분</th>
            </tr>
            <tr className={styles.screenPage__searchResultTable_items}>
                <td>1</td>
                <td>39847390485729</td>
                <td>??????</td>
                <td><img src={testImg} alt="test img" /></td>
                <td>?</td>
                <td>?</td>
                <td>0</td>
                <td>?</td>
            </tr>
            <tr className={styles.screenPage__searchResultTable_items}>
                <td>2</td>
                <td>345342343433729</td>
                <td>??????</td>
                <td><img src={testImg} alt="test img" /></td>
                <td>?</td>
                <td>?</td>
                <td>0</td>
                <td>?</td>
            </tr>
            
        </table>
    );
}

export default StockStatusResult;