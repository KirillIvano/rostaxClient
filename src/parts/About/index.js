import React from 'react';
import styles from './styles.less';

import {Button} from '@/components/Button';
import {Link} from 'react-router-dom';

export const About = () => {
    return (
        <div className={styles.aboutSection}>
            <h1 className={styles.headline}>
                ПОЧЕМУ МЫ?
            </h1>
            <div className={styles.aboutItems}>
                <div className={styles.item}>
                    <h1 className={styles.itemHeadline}>
                        КАЧЕСТВО
                    </h1>
                    <p className={styles.itemContent}>
                        {'Компания постоянно совершенствует технологию производства,\
                            благодаря чему достигается качество выпускаемой продукции.'}
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.itemHeadline}>
                        КАЧЕСТВО
                    </h1>
                    <p className={styles.itemContent}>
                        {'Компания постоянно совершенствует технологию производства,\
                            благодаря чему достигается качество выпускаемой продукции.'}
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.itemHeadline}>
                        КАЧЕСТВО
                    </h1>
                    <p className={styles.itemContent}>
                        {'Компания постоянно совершенствует технологию производства,\
                            благодаря чему достигается качество выпускаемой продукции.'}
                    </p>
                </div>
            </div>

            <Link to='/product_types'>
                <Button size={'xl'}>
                    ПРОДУКЦИЯ
                </Button>
            </Link>
        </div>
    );
};

