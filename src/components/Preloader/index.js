import React from 'react';
import styles from './styles.less';

export default function Preloader() {
    return (
        <div className={styles.preloaderContainer}>
            <div className={styles.preloader}>
                <div className={styles.frontPaint}></div>
                <div className={styles.backPaint}></div>
            </div>
        </div>
    );
};