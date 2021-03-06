import React from 'react';
import styles from './styles.less';

const Preloader = () => {
    return (
        <div className={styles.preloaderContainer}>
            <div className={styles.preloader}>
                <div className={styles.frontPaint}></div>
                <div className={styles.backPaint}></div>
            </div>
        </div>
    );
};

export default Preloader;
