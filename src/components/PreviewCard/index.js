import * as React from 'react';
import styles from './styles.less';
import {Link} from 'react-router-dom';

const PreviewCard =  ({
    image,
    children,
    to,
}) => (
    <Link className={styles.card} to={to}>
        <img src={image} className={styles.innerImage} />
        <div className={styles.cover}>
            <p className={styles.text}>
                {children}
            </p>
        </div>
    </Link>
);

export default PreviewCard;
