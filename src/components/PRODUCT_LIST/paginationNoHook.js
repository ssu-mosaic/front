import React from 'react';
import { Link } from "react-router-dom";
import styles from "../css/result-table.module.css";

const Pagination = ({ tablePerPage , totalTables, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalTables / tablePerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={styles.pagination}>
                {
                    pageNumbers.map((number) => (
                        <li key={`page${number}`} className={styles.pagination__pages}>
                            <Link to={'/order/searchorder'} onClick={() => paginate(number)} className="page-link">
                                {number}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )

}
export default Pagination;