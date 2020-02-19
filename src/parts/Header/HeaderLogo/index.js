import React from 'react';
import styles from './styles.less';
import logourl from '@/images/logo.svg';
import {animateScroll} from 'react-scroll';

const HeaderLogo = function() {
    return (
        <img onClick={animateScroll.scrollToTop} className={styles.logo} src={logourl} />
    );
};

export default HeaderLogo;
