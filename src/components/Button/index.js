import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.less';

export const Button = () => ({
    children,

    size,
}) => {
    const sizeName = `size_${size === 'xl' ? 'xl' : 'l'}`;

    return (
        <button
            type='button'
            className={classnames(styles.button, styles[sizeName])}
        >
            {children}
        </button>
    );
};
