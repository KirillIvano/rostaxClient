import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {useParams} from 'react-router-dom';

import {ProductTypeItem} from '@/components/ProductTypeItem';
import {SmallPreloader} from '@/components/SmallPreloader';
import styles from './styles.less';

export const ProductType = () => {
    const {categoryId} = useParams();
    const GET_PRODUCT_TYPE = gql`
        {
            products(categoryId: ${categoryId}) {
                name
                type
                shortDescription
                id
            }
        }
    `;

    const {data, loading, error} = useQuery(GET_PRODUCT_TYPE);

    if (loading) {
        return <SmallPreloader />;
    }

    if (error) {
        return null;
    }

    const {products} = data;

    return (
        <div className={styles.productTypePage}>
            {
                products.map(
                    product => (
                        <ProductTypeItem
                            key={product.id}
                            categoryId={categoryId}
                            {...product}
                        />
                    ),
                )
            }
        </div>
    );
};
