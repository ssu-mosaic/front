import React from 'react';
import './table.css'
import { Link } from "react-router-dom";

const Pagination = ({ tablePerPage , totalTables, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalTables / tablePerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='Pagination'>
                {
                    pageNumbers.map((number) => (
                        <li key={`page${number}`} className="page-item">
                            <Link to={'/testTable'} onClick={() => paginate(number)} className="page-link">
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