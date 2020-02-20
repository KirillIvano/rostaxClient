import React from 'react';
import {animateScroll} from 'react-scroll';

import styles from './styles.less';

export const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.content}>
                Разработано KirillIvano в 2019 году
        </div>
        <div onClick={animateScroll.scrollToTop} className={styles.link}>
                Наверх
        </div>
    </div>
);
