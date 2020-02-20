import {useState} from 'react';

export const usePopupState = () => {
    const [isPopupPositive, setPositivity] = useState(false);
    const [popupContent, setPopupText] = useState('');
    const [isPopupVisible, setPopupVisibility] = useState(false);

    const closePopup = () => setPopupVisibility(false);
    const openPopup = () => setPopupVisibility(true);

    const invokePopup = (text, positivity, timeout=2000) => {
        setPositivity(positivity);
        setPopupText(text);
        openPopup();
        setTimeout(closePopup, timeout);
    };

    return {
        invokePopup,
        popupState: {
            isPopupPositive,
            popupContent,
            isPopupVisible,
        },
    };
};
