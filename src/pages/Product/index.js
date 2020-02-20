import React from 'react';
import ProductTypeItem from '@/components/ProductTypeItem';
import styles from './styles.less';

const data = [
    {
        name: 'Краска так т',
        type: 'Какая - то очень крутая краска.',
        shortDescription: 'с прикольным описанием',
    }, {
        name: 'Краска так т',
        type: 'Какая - то очень крутая краска.',
        shortDescription: 'с прикольным описанием',
    },
];

const Product = () => (
    <div className={styles.productTypePage}>
        {data.map(item => <ProductTypeItem {...item} />)}
    </div>
);

export default Product;
