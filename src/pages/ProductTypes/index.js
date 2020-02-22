import React from 'react';

import {ProductsSection} from '@/parts/ProductsSection';
import {BackButton} from '@/components/BackButton';
import {useScrollTop} from '@/hooks/useScrollTop';

export const ProductTypes = () => {
    useScrollTop();
    return (
        <>
            <ProductsSection />
            <BackButton url={'/'} />
        </>
    );
};
export default ProductTypes;
