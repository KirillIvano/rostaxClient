import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

import {PreviewCard} from '@/components/PreviewCard';
import styles from './styles.less';
import image from '@/images/paints.jpg';

const PRODUCTS_NAMES = gql`
    {
        productCategories {
            name
        }
    }
`;

export const ProductsSection = () => {
    const {loading, error, data} = useQuery(PRODUCTS_NAMES);

    if (loading) {
        return 'kekasda';
    }

    if (error) {
        return error;
    }

    return (
        <div className={styles.previewSection}>
            <div className={styles.headline}>
                Наша продукция
            </div>
            <PreviewCard to={'/product_type/0'} image={image}>
                {JSON.stringify(data)}
            </PreviewCard>
            <PreviewCard to={'/product_type/0'} image={image}>
                {JSON.stringify(data)}
            </PreviewCard>
            <PreviewCard to={'/product_type/0'} image={image}>
                {JSON.stringify(data)}
            </PreviewCard>
        </div>
    );
};
