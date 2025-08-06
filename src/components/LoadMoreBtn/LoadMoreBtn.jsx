import React from "react";
import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
    <div className={styles.wrapper}>
        <button className={styles.btn} onClick={onClick}>
            Load More
        </button>
    </div>
);

export default LoadMoreBtn;
