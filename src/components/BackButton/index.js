import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.less';

export const BackButton = ({url}) => (
    <Link className={styles.backBtn} to={url}>
        НАЗАД
    </Link>
);

