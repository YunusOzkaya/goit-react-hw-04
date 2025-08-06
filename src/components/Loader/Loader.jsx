import React from "react";
import { Circles } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <Circles color="#24292f" height={64} width={64} />
  </div>
);

export default Loader;
