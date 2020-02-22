import React from 'react';
import styles from './styles.less';
import NavItems from '@/parts/NavItems';

export const HeaderNav = ({toggleMenu}) => (
    <div className={styles.nav}>
        <NavItems toggleMenu={toggleMenu} />
    </div>
);
