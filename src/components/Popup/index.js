import * as React from 'react';
import styles from './styles.less';
import classnames from 'classnames';

const Popup = ({
    isPopupPositive,
    popupContent,
    isPopupVisible,
}) => {
    const colorName = `${isPopupPositive ? 'positive' : 'negative'}`;

    return (
        <div className={
            classnames(
                styles[colorName],
                styles.popup,
                {
                    [styles.hidden]: !isPopupVisible,
                },
            )
        }>
            {popupContent}
        </div>
    );
};

export default Popup;
