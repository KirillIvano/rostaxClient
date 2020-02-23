import * as React from 'react';
import styles from './styles.less';

const Color = ({
    code,
    name,
}) => (
    <div style={{background: `#${code}`}} className={styles.colorCard} >
        <div className={styles.colorInfo}>
            <p className={styles.colorText}>
                {name}
            </p>
        </div>
    </div>
);

export default Color;
