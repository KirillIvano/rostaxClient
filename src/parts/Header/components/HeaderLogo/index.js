import React from 'react';
import styles from './styles.less';
import logourl from '@/images/logo.svg';
import {animateScroll} from 'react-scroll';

export const HeaderLogo = () => (
    <img
        onClick={animateScroll.scrollToTop}
        className={styles.logo}
        src={logourl}
    />
);
