import React, {useMemo} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {useParams} from 'react-router-dom';
import {gql} from 'apollo-boost';

import styles from './styles.less';
import {
    SmallPreloader,
    ErrorView,
    BackButton,
} from '@/components';
import {
    DescriptionSectionsMap,
    MainSection,
} from './components';
import {useScrollTop} from '@/hooks/useScrollTop';

const ProductDetails = () => {
    useScrollTop();
    const {productId, categoryId} = useParams();

    const GET_PRODUCT = useMemo(
        () => gql`
            {
                product(productId: "${productId}", categoryId: ${categoryId}) {
                    name
                    shortDescription
                    type
                    description {
                        name
                        items {
                            propName
                            propValue
                        }
                    }
                }
            }
        `,
        [productId, categoryId],
    );

    const {data, loading, error} = useQuery(GET_PRODUCT);

    if (loading) {
        return (
            <div className={styles.productDetails}>
                <SmallPreloader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.productDetails}>
                <ErrorView
                    text={'Что - то сломалось. Пожалуйста, позвоните и' +
                  ' задайте все вопросы нам лично, или приходите позже!'}
                />
            </div>
        );
    }

    const {product} = data;
    const {description, name, shortDescription, type} = product;

    return (
        <div className={styles.productDetails}>
            <MainSection {...{name, shortDescription, type}}  />
            <DescriptionSectionsMap description={description} />
            <BackButton url={`/product_type/${categoryId}`} />
        </div>
    );
};


export default ProductDetails;
