import * as React from 'react';
import styles from './styles.less';

export default (props) => {
    const {size} = props;
    const sizeName = `size_${size === 'xl' ? 'xl' : 'l'}`;
    return (
        <button className={styles.button + ' ' + styles[sizeName]}>
            {props.children}
        </button>
    );
};