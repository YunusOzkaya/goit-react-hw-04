import React, { useEffect } from "react";
import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <ReactModal
      isOpen={!!image}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.modal}
      shouldCloseOnOverlayClick={true}
      contentLabel="Image Modal"
    >
      {image && (
        <div>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Large view"}
            className={styles.img}
          />
          <div className={styles.info}>
            <span>
              <b>Author:</b> {image.user.name}
            </span>
            <span>
              <b>Likes:</b> {image.likes}
            </span>
            {image.description && (
              <span>
                <b>Description:</b> {image.description}
              </span>
            )}
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            ×
          </button>
        </div>
      )}
    </ReactModal>
  );
};

export default ImageModal;
