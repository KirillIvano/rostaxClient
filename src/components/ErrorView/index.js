import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.less';

const ErrorView = ({
    text,
}) => {
    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorBlock}>
                <p>
                    {text}
                </p>
                <br />
                <Link className={styles.toMainBtn} to={'/'}>
                На главную
                </Link>
            </div>
        </div>
    );
};

export default ErrorView;
