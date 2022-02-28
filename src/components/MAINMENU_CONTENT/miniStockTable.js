import tableStyles from "../css/mainMenu-content.module.css";
import Fragment from "render-fragment";

function MiniStock(miniStock) {
  const newData = miniStock.miniStock;
  //console.log(newData);

  return (
    <Fragment>
      <div className={tableStyles.miniMenu_title}>5대 최소잔여 재고</div>
      <table className={tableStyles.miniTable}>
        <thead>
          <tr className={tableStyles.miniTable_header}>
            <th>물품 이름</th>
            <th>거래처 이름</th>
            <th>잔여 수량</th>
            <th>물품 단위</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((table) => (
            <Fragment key={`${table.productId}__stock`}>
              <tr className={tableStyles.miniTable_item}>
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
