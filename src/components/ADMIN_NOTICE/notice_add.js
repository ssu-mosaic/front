import styles from "../css/qnaReadEdit.module.css";
import Fragment from "render-fragment";

function QnaRead({
  newFormData,
  handleEditFormChange,
  onCancelClick,
  onSubmitEditForm,
}) {
  //console.log(noticeContent);
  return (
    <Fragment>
      <form onsubmit={onSubmitEditForm}>
        <div className={styles.qnaBox}>
          <div className={styles.qnaBox__row}>
            <input
              type="button"
              value="작성취소"
              onClick={onCancelClick}
              className={styles.qnaEditButton}
            />
            <input
              type="submit"
              value="작성완료"
              className={styles.qnaEditButton}
            />
          </div>
          <div className={styles.qnaBox__row}>
            <div className={styles.qnaBox__row_title}>공지 내용</div>
            <input
              type="text"
              name="noticeTitle"
              placeholder="공지 제목"
              className={styles.noticeTitle}
              required
            />
            <textarea
              type="text"
              name="noticeContent"
              value={newFormData.noticeContent}
              onChange={handleEditFormChange}
              placeholder="공지 내용"
              className={styles.noticeContent}
              required
            />
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default QnaRead;
