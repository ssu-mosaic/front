import styles from "./css/main-menu-content-sector.module.css";

function MainMenuContentSector(){

    return(
        <div className={styles.screenPage__content}>
            <div className={styles.screenPage__sector_mainColumn}>
                <div className={`${styles.screenPage__sector_row} ${styles.screenPage__sectorBox_wide} ${styles.screenPage__sectorBox_attr}`}>
                    <span>row</span>
                </div>
                <div className={styles.screenPage__sector_row }>
                    <div className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}>
                        <span>column1</span>
                    </div>
                    <div className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}>
                        <span>column2</span>
                    </div>
                </div>
                <div className={styles.screenPage__sector_row }>
                    <div className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}>
                        <span>column3</span>
                    </div>
                    <div className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}>
                        <span>column4</span>
                    </div>
                </div>
            </div>
            <div className={styles.screenPage__sector_mainColumn}>
                <div className={`${styles.screenPage__sector_row} ${styles.screenPage__sectorBox_tall} ${styles.screenPage__sectorBox_attr}`}>
                        <span>row1</span>
                </div>
                <div className={`${styles.screenPage__sector_row} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}>
                        <span>row2</span>
                </div>
            </div>
        </div>


    );
}

export default MainMenuContentSector;