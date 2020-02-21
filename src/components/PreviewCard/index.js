import * as React from 'react';
import styles from './styles.less';
import {Link} from 'react-router-dom';

export const PreviewCard =  ({
    image,
    children,
    to,
}) => (
    <Link className={styles.card} to={to}>
        <img src={image} className={styles.innerImage}></img>
        <div className={styles.cover}>
            <p className={styles.text}>
                {children}
            </p>
        </div>
    </Link>
);
