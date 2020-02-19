import * as React from 'react';
import styles from './styles.less';

export default ({
    color,
    name,
}) => (
    <div style={{background: `#${color}`}} className={styles.colorCard} >
        <div className={styles.colorInfo}>
            <p className={styles.colorText}>
                {name}
            </p>
        </div>
    </div>
);

