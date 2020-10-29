import React from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";
export default function ImageGalleryItem({ webformatURL, onClick }) {
  return (
    <li onClick={onClick} className={styles.item}>
      <img src={webformatURL} alt="" className={styles.image} />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
