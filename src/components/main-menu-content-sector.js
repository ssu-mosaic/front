import styles from "./css/main-menu-content-sector.module.css";

function MainMenuContentSector(){

    return(
        <div className={styles.screenPage__content}>
            <div className={styles.screenPage__sector_mainColumn}>
                <div className={`${styles.screenPage__sector_row} ${styles.screenPage__sectorBox_wide} ${styles.screenPage__sectorBox_attr}`}>
                    <span>간단한 상태 보고 아이콘 별 배치</span>
                </div>
                <div className={styles.screenPage__sector_row }>
                    <div className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}>
                        <span> 발주 통계 지표  </span>
                    </div>
                    <div className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}>
                        <span>발주 완료 통계 지표</span>
                    </div>
                </div>
                <div className={styles.screenPage__sector_row }>
                    <div className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}>
                        <span>재정 지표 추후 추가</span>
                    </div>
                    <div className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}>
                        <span>재고 관리 지표</span>
                    </div>
                </div>
            </div>
            <div className={styles.screenPage__sector_mainColumn}>
                <div className={`${styles.screenPage__sector_row} ${styles.screenPage__sectorBox_tall} ${styles.screenPage__sectorBox_attr}`}>
                        <span>공지사항</span>
                </div>
                <div className={`${styles.screenPage__sector_row} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}>
                        <span>인사 관리 지표 추후 추가</span>
                </div>
            </div>
        </div>


    );
}

export default MainMenuContentSector;