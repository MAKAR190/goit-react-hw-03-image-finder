import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={styles.list}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          onClick={() => onClick(largeImageURL)}
          key={id}
          webformatURL={webformatURL}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
