import React from 'react';

import styles from './styles.less';
import NavItems from '@/parts/NavItems';

export const HeaderMenu = ({
    isOpened,
}) => (
    <div className={styles.menu + ' ' + (isOpened && styles.opened)}>
        <NavItems />
    </div>
);
