import styles from "./css/result-table.module.css";
import testImg from './test.JPG';

function SearchOrderResultTable(){

    return(
        <table className={styles.screenPage__searchResultTable}>
            <tr className={styles.screenPage__searchResultTable_header}>
                <th scope="col">No.</th>
                <th scope="col">발주일자</th>
                <th scope="col">발주번호</th>
                <th scope="col">상품이미지</th>
                <th scope="col">단품명</th>
                <th scope="col">발주담당자</th>
                <th scope="col">납품예정일자</th>
                <th scope="col">발주확정</th>
                <th scope="col">발주확정일시</th>
                <th scope="col">물품구분</th>
            </tr>
            <tr className={styles.screenPage__searchResultTable_items}>
                <td>1</td>
                <td>39847390485729</td>
                <td>??????</td>
                <td><img src={testImg} alt="test img" /></td>
                <td>숭실닭</td>
                <td>숭숭실{` (010-0909-0909)`}</td>
                <td>2099-12-31</td>
                <td>미확정</td>
                <td>미확정</td>
                <td>계육</td>
            </tr>
            <tr className={styles.screenPage__searchResultTable_items}>
                <td>2</td>
                <td>2342342343433729</td>
                <td>??????</td>
                <td><img src={testImg} alt="test img" /></td>
                <td>매운숭실닭</td>
                <td>매숭실{` (010-0909-0909)`}</td>
                <td>2099-12-31</td>
                <td>확정</td>
                <td>2100-01-01</td>
                <td>계육</td>
            </tr>
            
        </table>
    );
}

export default SearchOrderResultTable;