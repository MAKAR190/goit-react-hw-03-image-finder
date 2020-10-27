import React from 'react'
import Btn from '@material-ui/core/Button';
import styles from './Button.module.css'
export default function Button({loadMore}) {
    return (
        <div className={styles.btnWrapper}>
 <Btn onClick={loadMore} variant="contained" color="primary">
        Load more
      </Btn>
        </div>
       
    )
}
