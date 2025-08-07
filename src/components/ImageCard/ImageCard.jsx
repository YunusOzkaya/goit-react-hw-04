import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Unsplash Image"}
        className={styles.img}
        onClick={() => onClick(image)}
      />
    </div>
  );
};

export default ImageCard;
