import React, {useState, useEffect} from 'react';

import styles from './styles.less';
import {MapFrame} from './../MapFrame';
import {ContactsContent} from '../ContactsContent';

export const Contacts = () => {
    const [frameSize, setFrameSize] = useState('100%');

    useEffect(() => {
        const changeSize = () => setFrameSize(
            window.innerWidth > 600 ?
                '70%' : '100%',
        );

        window.addEventListener('resize', changeSize);
        return window.removeEventListener('resize', changeSize);
    }, []);

    return (
        <div className={styles.contentSection}>
            <MapFrame width={frameSize} />
            <ContactsContent />
        </div>
    );
};
