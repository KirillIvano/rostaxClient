import React from 'react';

import styles from './styles.less';
import NavItems from '@/parts/NavItems';

export const HeaderMenu = ({
    isOpened,
    toggleMenu,
}) => (
    <div className={styles.menu + ' ' + (isOpened && styles.opened)}>
        <NavItems toggleMenu={toggleMenu} />
    </div>
);
