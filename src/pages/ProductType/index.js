import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {
    useParams,
} from 'react-router-dom';

import {ProductTypeItem} from '@/components/ProductTypeItem';
import {SmallPreloader} from '@/components/SmallPreloader';
import {Error} from '@/components/Error';
import {BackButton} from '@/components/BackButton';
import styles from './styles.less';
import {useScrollTop} from '@/hooks/useScrollTop';

const ProductType = () => {
    useScrollTop();
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
        return (
            <div className={styles.productTypePage}>
                <Error
                    text={'Что - то сломалось. Пожалуйста, позвоните и' +
                  ' задайте все вопросы нам лично, или приходите позже!'}
                />
            </div>
        );
    }

    const {products} = data;

    return (
        <>
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
            <BackButton url={'/product_types/'} />
        </>
    );
};

export default ProductType;
