import * as React from 'react';
import styles from './styles.less';

class Popup extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidUpdate() {
        if (this.props.isPopupVisible) {
            if (this.timeout){
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(this.props.closePopup, 3000);
        }
    }

    render() {
        const {isPopupPositive, popupContent, isPopupVisible} = this.props;
        const colorName = `${isPopupPositive ? 'positive' : 'negative'}`;
        return (
            <div className={styles[colorName] + ' ' + styles.popup + ' ' + (isPopupVisible || styles.hidden)}>
                {popupContent}
            </div>
        );
    }
};

export default Popup;