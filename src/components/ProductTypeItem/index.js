import React from 'react';

import styles from './styles.less';
import {Button} from '@/components/Button';
import {Link} from 'react-router-dom';

export const ProductTypeItem = ({
    categoryId,
    id,

    name,
    type,
    shortDescription,
}) => (
    <div className={styles.productType}>
        <div className={styles.name}>
            {name}
        </div>
        <div className={styles.type}>
            <span className={styles.title}>
                Тип:
                {' '}
            </span>
            {type}
        </div>
        <div className={styles.content}>
            <span className={styles.title}>
                Описание:
                {' '}
            </span>
            {shortDescription}
        </div>
        <Link to={`/product_details/${categoryId}/${id}`}>
            <Button size={'l'}>
                Перейти к товару.
            </Button>
        </Link>
    </div>
);
