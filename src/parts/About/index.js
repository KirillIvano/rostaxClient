import React from 'react';
import styles from './styles.less';

import {Button} from '@/components';
import {Link} from 'react-router-dom';
import {useAppearOnScroll} from '@/hooks/useAppearOnScroll';

const About = () => {
    const elRef = useAppearOnScroll();

    return (
        <section ref={elRef} className={styles.aboutSection}>
            <h1 className={styles.headline}>
                ПОЧЕМУ МЫ?
            </h1>
            <article className={styles.aboutItems}>
                <div className={styles.item}>
                    <img className={styles.itemView} src={require('./../../images/thumb-up.svg')} alt="" />
                    <h2 className={styles.itemHeadline}>
                        КАЧЕСТВО
                    </h2>
                    <p className={styles.itemContent}>
                        {'Компания постоянно совершенствует технологию производства,\
                            благодаря чему достигается качество выпускаемой продукции'}
                    </p>
                </div>
                <div className={styles.item}>
                    <img className={styles.itemView} src={require('./../../images/assortiment.svg')} alt="" />
                    <h2 className={styles.itemHeadline}>
                        АССОРТИМЕНТ
                    </h2>
                    <p className={styles.itemContent}>
                        {'Мы имеем широкий ассортимент различных типов продукции'}
                    </p>
                </div>
                <div className={styles.item}>
                    <span className={styles.experience}>
                        1994
                    </span>
                    <h2 className={styles.itemHeadline}>
                        ОПЫТ
                    </h2>
                    <p className={styles.itemContent}>
                        {'Мы занимаемся производством с 1994 года, и имеем широкий опыт в этом деле'}
                    </p>
                </div>
            </article>

            <Link to='/product_types'>
                <Button size={'xl'}>
                    ПРОДУКЦИЯ
                </Button>
            </Link>
        </section>
    );
};

export default About;
