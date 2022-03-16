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
      <td key={"inquiryDate_td"}>{inquiryDate.slice(0, 10)}</td>
      <td key={"inquiryAnsDate_td"}>
        {inquiryAnswer === null ? "Waiting for Answer" : `${inquiryAnsDate}`}
      </td>
    </tr>
  );
}

export default QnaTables;
