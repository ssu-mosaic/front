import styles from "./css/result-table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import testImg from './test.JPG';

function ConfirmResultTable(){

    return(
        <table className={styles.screenPage__searchResultTable}>
            <thead>
                <tr className={styles.screenPage__searchResultTable_header}>
                    <th scope="col">No.</th>
                    <th scope="col">단품코드</th>
                    <th scope="col">단품명</th>
                    <th scope="col">상품이미지</th>
                    <th scope="col">창고현재고</th>
                    <th scope="col">발주단위</th>
                    <th scope="col">발주단가{`(단위)`}</th>
                    <th scope="col">수량 적는 곳</th>
                    <th scope="col">거래처삭제</th>
                    <th scope="col">주문등록</th>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.screenPage__searchResultTable_items}>
                    <td>1</td>
                    <td>39847390485729</td>
                    <td>??????</td>
                    <td><img src={testImg} alt="test img" /></td>
                    <td>?</td>
                    <td>?</td>
                    <td>0</td>
                    <td>?</td>
                    <td><button><FontAwesomeIcon icon={faTimes} size="2x" /></button></td>
                    <td><button><FontAwesomeIcon icon={faCheck} size="2x" /></button></td>
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
                    <td><button><FontAwesomeIcon icon={faTimes} size="2x" /></button></td>
                    <td><button><FontAwesomeIcon icon={faCheck} size="2x" /></button></td>
                </tr>
            </tbody>
            
        </table>
    );
}

export default ConfirmResultTable;