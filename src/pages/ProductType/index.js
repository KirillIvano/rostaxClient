import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {
    useParams,
} from 'react-router-dom';

import {
    ProductTypeItem,
    SmallPreloader,
    ErrorView,
    BackButton,
} from '@/components';
import styles from './styles.less';
import {useScrollTop} from '@/hooks/useScrollTop';

const ProductPreviews = ({
    products,
    categoryId,
}) => {
    const [searched, setSearched] = useState('');

    return (
        <div className={styles.productTypePage}>
            <div className={styles.searchContainer}>
                <input
                    className={styles.search}
                    onChange={(e) => setSearched(e.target.value)}
                    placeholder='Поиск...'
                    type="text"
                />
            </div>
            {
                products
                    .filter(({name}) => name.indexOf(searched) !== -1)
                    .map(
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
                <ErrorView
                    text={'Что - то сломалось. Пожалуйста, позвоните и' +
                  ' задайте все вопросы нам лично, или приходите позже!'}
                />
            </div>
        );
    }

    const {products} = data;

    return (
        <>
            <ProductPreviews categoryId={categoryId} products={products} />
            <BackButton url={'/product_types/'} />
        </>
    );
};

export default ProductType;
