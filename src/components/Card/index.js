import React from 'react';
import styles from './styles.less';

export default function Card(props) {
    const {
        name,
        description,
        picture
    } = props;

    return (
        <div className={styles.card}>
            <img className={styles.image} src={picture}/>   
            <div className={styles.content}>
                <h1 className={styles.header}>{name}</h1>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
