import React from 'react';
import styles from './styles.less';
import NavItems from '@/parts/NavItems';

const HeaderMenu = function(props) {
    const {isOpened} = props;
    console.log(isOpened);

    return (
        <div className={styles.menu + ' ' + (isOpened && styles.opened)}>
            <NavItems />
        </div>
    );
};

export default HeaderMenu;
