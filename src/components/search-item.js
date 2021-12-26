import contentStyles from "./css/screen-content.module.css";
import styles from "./css/search-item.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
//import SearchItemResultTable from "./search-item-result";

function SearchForItem(){

    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [option5, setOption5] = useState("");
    const [option6, setOption6] = useState("");

    const onOption1Change = (event) => {
        setOption1(event.target.value);
    }
    const onOption2Change = (event) => {
        setOption2(event.target.value);
    }
    const onOption3Change = (event) => {
        setOption3(event.target.value);
    }
    const onOption4Change = (event) => {
        setOption4(event.target.value);
    }
    const onOption5Change = (event) => {
        setOption5(event.target.value);
    }
    const onOption6Change = (event) => {
        setOption6(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(`${option1} ${option2} ${option3} ${option4} ${option5} ${option6}`);
    }

    return(

        <div className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}>
            <div className={styles.screenPage__searchItem}>
                <span>거래처등록</span>
            </div>
            <div className={styles.screenPage__nextButton}>
                <Link to={'/order/confirmitem'}><input type="button" value="발주주문"/></Link>
            </div>
            <div className={styles.screenPage__searchBox}>
                <div className={styles.screenPage_title}><span>거래처정보입력</span></div>
                <form onSubmit={onSubmit}>
                    <div className={`${styles.screenPage__section_row} ${styles.screenPage__searchList}`}>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="company">거래처정보 </label> 
                                <input type="text" name="company" onChange={onOption1Change} required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="company">거래처정보 </label> 
                                <input type="text" name="company" onChange={onOption2Change} required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="itemName">거래처정보 </label> 
                                <input type="text" name="itemName" onChange={onOption3Change} required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">거래처정보? </label> 
                                <input type="text" name="condition" onChange={onOption4Change} required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">거래처정보? </label> 
                                <input type="text" name="condition" onChange={onOption5Change} required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_column}>
                                <div className={styles.screenPage__searchOption}>
                                    <label for="condition">거래처정보? </label> 
                                    <input type="number" name="condition" onChange={onOption6Change} required/>
                                </div>
                        </div>
                    </div>
                    <div className={styles.screenPage__section_row}>
                            <input type="submit" value="등록"/>
                    </div>
                </form>
            </div>
            <div className={styles.screenPage__searchResult}>
                <div className={styles.screenPage_title}><span></span></div>
            </div>
        </div>
    
    );
}

export default SearchForItem;