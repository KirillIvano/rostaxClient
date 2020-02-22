import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

import {PreviewCard} from '@/components/PreviewCard';
import styles from './styles.less';
import image from '@/images/paints.jpg';

import {SmallPreloader} from '@/components/SmallPreloader';
import {Error} from '@/components/Error';


const PRODUCTS_NAMES = gql`
    {
        productCategories {
            name
            id
        }
    }
`;

const PreviewCards = ({
    productCategories,
}) => productCategories.map(
    ({id, name}) => (
        <PreviewCard
            key={id}
            to={`/product_type/${id}`}
            image={image}
        >
            {name}
        </PreviewCard>
    ),
);


export const ProductsSection = () => {
    const {loading, error, data} = useQuery(PRODUCTS_NAMES);

    if (loading) {
        return (
            <div className={styles.previewSection}>
                <SmallPreloader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.previewSection}>
                <Error
                    text={'Что - то сломалось. Пожалуйста, позвоните и' +
                          ' задайте все вопросы нам лично, или приходите позже!'}
                />
            </div>
        );
    }

    const {productCategories} = data;
    return (
        <div className={styles.previewSection}>
            <div className={styles.headline}>
                Наша продукция
            </div>
            <PreviewCards productCategories={productCategories} />
        </div>
    );
};
