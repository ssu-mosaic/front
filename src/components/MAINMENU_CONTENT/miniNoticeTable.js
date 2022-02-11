import tableStyles from "../css/mainMenu-content.module.css";
import Fragment from "render-fragment";

function MiniNotice(miniNotice) {
  const newData = miniNotice.miniNotice;
  console.log(newData);

  return (
    <Fragment>
      <div className={tableStyles.miniMenu_title}>최근 공지사항</div>
      <table className={tableStyles.miniTable}>
        <thead>
          <tr className={tableStyles.miniTable_header}>
            <th>공지 제목</th>
            <th>공지 날짜</th>
          </tr>
        </thead>
        <tbody>
          {newData.data.map((table) => (
            <Fragment key={table.productId}>
              <tr className={tableStyles.miniTable_item}>
                <td>{table.noticeTitle}</td>
                <td>{table.noticeDate}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default MiniNotice;
