import styles from "../css/result-table.module.css";
import { Link } from "react-router-dom";

function QnaTables({
  inquiryId,
  inquiryTitle,
  inquiryDate,
  inquiryAnswer,
  inquiryAnsDate,
}) {
  return (
    <tr key={inquiryId} className={styles.screenPage__searchResultTable_items}>
      <td key={"inquiryTitle_td"}>
        <Link to={`/admin/inquiry/${inquiryId}`}>
          {inquiryTitle.length > 41
            ? `${inquiryTitle.slice(0, 40)}...`
            : `${inquiryTitle}`}
        </Link>
      </td>
      <td key={"inquiryDate_td"}>{inquiryDate}</td>
      <td key={"inquiryAnsDate_td"}>
        {inquiryAnswer.length === 0 ? "답변 대기중" : `${inquiryAnsDate}`}
      </td>
    </tr>
  );
}

export default QnaTables;
