import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/result-table.module.css";
import { useParams } from "react-router-dom";

const Pagination = ({ tablePerPage, totalTables, paginate }) => {
  const pageNumbers = [];
  const { id } = useParams();
  for (let i = 1; i <= Math.ceil(totalTables / tablePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={`page${number}`} className={styles.pagination__pages}>
            <Link
              to={`/order/requestorder/${id}`}
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
