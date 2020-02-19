import React from 'react';
import styles from './styles.less';

export const Card = ({
    name,
    description,
    picture,
}) => (
    <div className={styles.card}>
        <img className={styles.image} src={picture} />
        <div className={styles.content}>
            <h1 className={styles.header}>
                {name}
            </h1>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    </div>
);
