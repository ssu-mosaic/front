import styles from "../css/mainMenu-content.module.css";
import Fragment from "render-fragment";

function MiniStock(miniStock) {
  const newTable = miniStock.miniStock;

  return (
    <Fragment>
      <div className={styles.miniMenu_title}>5대 최소잔여 재고</div>
      <table className={styles.screenPage__searchResultTable}>
        <thead>
          <tr className={styles.screenPage__searchResultTable_header}>
            <th>물품 이름</th>
            <th>거래처 이름</th>
            <th>잔여 수량</th>
            <th>물품 단위</th>
          </tr>
        </thead>
        <tbody>
          {newTable.map((table) => (
            <Fragment key={table.productId}>
              <tr className={styles.screenPage__searchResultTable_items}>
                <td>{table.productName}</td>
                <td>{table.retailerName}</td>
                <td>{table.productCnt}</td>
                <td>{table.productUnit}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default MiniStock;
