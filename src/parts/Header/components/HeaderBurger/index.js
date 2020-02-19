import React from 'react';
import styles from './styles.less';

export const HeaderBurger = ({
    toggleMenu,
}) => (
    <div className={styles.burgerContainer} onClick={toggleMenu}>
        <div className={styles.burger}></div>
    </div>
);
