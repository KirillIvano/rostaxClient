import React from 'react';
import styles from './styles.less';

const HeaderLogo = function(props) {
    return (
        <div className={styles.burgerContainer} onClick={props.toggleMenu}>
            <div className={styles.burger}></div>
        </div>
    );
};

export default HeaderLogo;
