import React from 'react'
import styles from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
export default function ImageGallery({articles}) {
    return (
        <ul className={styles.list}>
             {articles.map(({id,webformatURL,title})=>(
                 <ImageGalleryItem title={title} key={id} webformatURL={webformatURL}/>
             ))}
        </ul>
    )
}
