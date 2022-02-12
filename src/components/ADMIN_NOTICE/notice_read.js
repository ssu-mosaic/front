import styles from "../css/qnaReadEdit.module.css";

function QnaRead({ noticeContent, noticeEditDate }) {
  //console.log(noticeContent);
  return (
    <div className={styles.qnaBox}>
      <div className={styles.qnaBox__row}>
        <div className={styles.noticeEditDate}>
          {noticeEditDate.length < 1
            ? "수정내역 없음"
            : `최종 수정 일자 : ${noticeEditDate}`}
        </div>
      </div>
      <div className={styles.qnaBox__row}>
        <div className={styles.qnaBox__row_title}>공지 내용</div>
        <div className={styles.noticeContent}>{`${noticeContent}`}</div>
      </div>
    </div>
  );
}

export default QnaRead;
