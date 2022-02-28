import styles from "../css/result-table.module.css";
import { Link } from "react-router-dom";

function QnaTables({ noticeId, noticeTitle, noticeDate, noticeEditDate }) {
  return (
    <tr key={noticeId} className={styles.screenPage__searchResultTable_items}>
      <td>
        <Link to={`/notice/${noticeId}`}>
          {noticeTitle.length > 61
            ? `${noticeTitle.slice(0, 60)}...`
            : `${noticeTitle}`}
        </Link>
      </td>
      <td>{noticeDate.slice(0, 10)}</td>
      <td>
        {noticeEditDate.length < 1
          ? "수정내역 없음"
          : `${noticeEditDate.slice(0, 10)}`}
      </td>
    </tr>
  );
}

export default QnaTables;
