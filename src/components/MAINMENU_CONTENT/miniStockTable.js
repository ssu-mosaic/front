import tableStyles from "../css/mainMenu-content.module.css";
import Fragment from "render-fragment";

function MiniStock(miniStock) {
  const newData = miniStock.miniStock;
  //console.log(newData);

  return (
    <Fragment>
      <div className={tableStyles.miniMenu_title}>5 Least Stock</div>
      <table className={tableStyles.miniTable}>
        <thead>
          <tr className={tableStyles.miniTable_header}>
            <th>product</th>
            <th>retailer</th>
            <th>count</th>
            <th>unit</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((table) => (
            <Fragment key={`${table.productId}__stock`}>
              <tr className={tableStyles.miniTable_item}>
                <td>{table.productName}</td>
                <td>
                  {table.retailerName === null
                    ? "Written Manually"
                    : `${table.retailerName}`}
                </td>
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
