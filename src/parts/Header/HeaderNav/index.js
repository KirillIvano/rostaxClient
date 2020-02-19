import React from 'react';
import styles from './styles.less';
import NavItems from '@/parts/NavItems';

const HeaderLogo = function() {
    return (
        <div className={styles.nav}>
            <NavItems />
        </div>
    );
};

export default HeaderLogo;
