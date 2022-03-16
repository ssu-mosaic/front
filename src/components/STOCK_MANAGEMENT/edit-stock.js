import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
//import ConfirmItemResultTable from "./order-confirm-result";
import StockListTable from "../STOCK_LIST/tableRender";
import React from "react";
//import { DateRangePicker } from 'rsuite';
//import 'rsuite/dist/rsuite.css';
//import { useState } from "react";
import { Link } from "react-router-dom";

function EditForStock() {
  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Stock</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={"/stock/add"}>
          <input type="button" value="Add Stock" />
        </Link>
      </div>

      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>Retailer</span>
        </div>
        <StockListTable />
      </div>
    </div>
  );
}

export default EditForStock;
