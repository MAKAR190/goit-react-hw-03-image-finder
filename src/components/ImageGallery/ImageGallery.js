import React from 'react'
import styles from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
export default function ImageGallery({articles,onClick}) {
    return (
        <ul className={styles.list}>
             {articles.map(({id,webformatURL,title})=>(
                 <ImageGalleryItem onClick={onClick} title={title} key={id} webformatURL={webformatURL}/>
             ))}
        </ul>
    )
}
