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
        <Link to={`/qna/${inquiryId}`}>
          {inquiryTitle.length > 41
            ? `${inquiryTitle.slice(0, 40)}...`
            : `${inquiryTitle}`}
        </Link>
      </td>
      <td key={"inquiryDate_td"}>{inquiryDate.slice(0, 10)}</td>
      <td key={"inquiryAnsDate_td"}>
        {inquiryAnswer === null
          ? "답변 대기중"
          : `${inquiryAnsDate.slice(0, 10)}`}
      </td>
    </tr>
  );
}

export default QnaTables;
