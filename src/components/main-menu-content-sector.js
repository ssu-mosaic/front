import styles from "./css/main-menu-content-sector.module.css";
import DoughnutOrderComplete from "./MAINMENU_CONTENT/doughnut-order-complete.js";
import BarExpense from "./MAINMENU_CONTENT/bar-expense";
import MiniNotice from "./MAINMENU_CONTENT/miniNoticeTable";
import MiniStock from "./MAINMENU_CONTENT/miniStockTable";
import adImg from "./MAINMENU_CONTENT/adsTest.JPG";
import axios from "axios";
import Fragment from "render-fragment";
import React, { useState, useEffect } from "react";

//test
import TEST_MAIN_PAGE_DATA from "./test_main_data.json";

let userID = localStorage.getItem("USER_ID");

function MainMenuContentSector() {
  const baseURL =
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
  // If purpose for testing without server useState(false)
  const [loading, setLoading] = useState(true);
  const [mainData, setMainData] = useState({});

  useEffect(() => {
    const userData = {
      userId: userID,
    };

    axios.post(`${baseURL}/stats`, userData).then((response) => {
      setMainData(response.data);
      setLoading(false);
    });
    //only for testing erase when real
    setMainData(TEST_MAIN_PAGE_DATA.data);
    setLoading(false);
  }, [mainData.Stock, mainData.Notice]);
  console.log(mainData.Stock);
  //console.log(miniTable);
  return (
    <Fragment>
      {loading ? (
        <strong>로딩중...</strong>
      ) : (
        <div className={styles.screenPage__content}>
          <div className={styles.screenPage__sector_mainColumn}>
            <div className={styles.screenPage__sector_row}>
              <div
                className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}
              >
                <BarExpense spendingData={mainData.Spending} />
              </div>
              <div
                className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}
              >
                <DoughnutOrderComplete orderData={mainData.OrderComplete} />
              </div>
            </div>
            <div className={styles.screenPage__sector_row}>
              <div
                className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}
              >
                <MiniStock miniStock={mainData.Stock} />
              </div>
              <div
                className={`${styles.screenPage__sector_column} ${styles.screenPage__sectorBox_square} ${styles.screenPage__sectorBox_attr}`}
              >
                <MiniNotice miniNotice={mainData.Notice} />
              </div>
            </div>
          </div>
          <div className={styles.screenPage__sector_mainColumn}>
            <div
              className={`${styles.screenPage__sector_row} ${styles.screenPage__sectorBox_tall} ${styles.screenPage__sectorBox_ads}`}
            >
              <img src={adImg} alt="ads" />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default MainMenuContentSector;
