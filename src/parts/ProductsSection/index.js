import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

import {
    PreviewCard,
    SmallPreloader,
    ErrorView,
} from '@/components';
import {getImageName} from '@/helpers/getImageName';

import styles from './styles.less';


const PRODUCTS_NAMES = gql`
    {
        productCategories {
            name
            image
            id
        }
    }
`;

const PreviewCards = ({
    productCategories,
}) => productCategories.map(
    ({id, name, image}) => (
        <PreviewCard
            key={id}
            to={`/product_type/${id}`}
            image={getImageName(image)}
        >
            {name}
        </PreviewCard>
    ),
);


const ProductsSection = () => {
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
                <ErrorView
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

export default ProductsSection;
