import React from 'react';
import styles from './styles.less';
import Copy from '@/HOCs/CopyPhone';

const Phone = () => {
    return <div className={styles.phone}>+74959722824</div>;
};

const HeaderPhone = function(props) {
    const {showPopup} = props;
    return (
        <div>
            <Copy phone={74959722824} handler={() => showPopup(true, 'Номер успешно скопирован!')}>
                <Phone/>
            </Copy>
        </div>
    );
};

export default HeaderPhone;
