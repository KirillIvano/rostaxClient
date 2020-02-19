import * as React from 'react';
import styles from './styles.less';

export const  Popup = ({
    isPopupPositive,
    popupContent,
    isPopupVisible,
}) => {
    const colorName = `${isPopupPositive ? 'positive' : 'negative'}`;
    return (
        <div className={styles[colorName] + ' ' + styles.popup + ' ' + (isPopupVisible || styles.hidden)}>
            {popupContent}
        </div>
    );
};

export default Popup;
