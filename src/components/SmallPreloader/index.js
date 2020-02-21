import React from 'react';
import styles from './styles.less';
import image from '@/images/smallPreloader.svg';

export const SmallPreloader = () =>
    <img src={image} className={styles.smallPreloader} />;
