import React from 'react';
import styles from './styles.less';
import {animateScroll} from 'react-scroll';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>Разработано KirillIvano в 2019 году</div>
            <div onClick={animateScroll.scrollToTop} className={styles.link}>Наверх</div>
        </div>  
    );
};

export default Footer;