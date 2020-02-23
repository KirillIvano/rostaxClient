import React from 'react';
import styles from './styles.less';

import {Button} from '@/components';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className={styles.aboutSection}>
            <h1 className={styles.headline}>
                ПОЧЕМУ МЫ?
            </h1>
            <div className={styles.aboutItems}>
                <div className={styles.item}>
                    <img className={styles.itemView} src={require('./../../images/thumb-up.svg')} alt="" />
                    <h1 className={styles.itemHeadline}>
                        КАЧЕСТВО
                    </h1>
                    <p className={styles.itemContent}>
                        {'Компания постоянно совершенствует технологию производства,\
                            благодаря чему достигается качество выпускаемой продукции'}
                    </p>
                </div>
                <div className={styles.item}>
                    <img className={styles.itemView} src={require('./../../images/assortiment.svg')} alt="" />
                    <h1 className={styles.itemHeadline}>
                        АССОРТИМЕНТ
                    </h1>
                    <p className={styles.itemContent}>
                        {'Мы имеем широкий ассортимент различных типов продукции'}
                    </p>
                </div>
                <div className={styles.item}>
                    <span className={styles.experience}>
                        1994
                    </span>
                    <h1 className={styles.itemHeadline}>
                        ОПЫТ
                    </h1>
                    <p className={styles.itemContent}>
                        {'Мы занимаемся производством с 1994 года, и имеем широкий опыт в этом деле'}
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

export default About;
