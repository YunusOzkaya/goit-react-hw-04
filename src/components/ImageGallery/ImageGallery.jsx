import React from "react";
import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  if (!images.length) return null;

  return (
    <ul className={styles.gallery}>
      {images.map((img) => (
        <li className={styles.item} key={img.id}>
          <ImageCard image={img} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
