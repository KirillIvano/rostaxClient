import React from 'react';
import styles from './styles.less';
import {Copy} from '@/HOCs/CopyPhone';

const Phone = () => (
    <div className={styles.phone}>
        +74959722824
    </div>
);

export const HeaderPhone = ({
    showPopup,
}) => (
    <Copy
        phone={74959722824}
        handler={() => showPopup(true, 'Номер успешно скопирован!')}
    >
        <Phone />
    </Copy>
);
