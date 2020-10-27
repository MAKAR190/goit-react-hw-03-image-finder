import React from 'react'
import styles from './ImageGalleryItem.module.css'


export default function ImageGalleryItem({webformatURL,title}) {
    return (
            <li className={styles.item}>
                 <img src={webformatURL} alt={title} className={styles.image}/>
            </li>
    )
}
