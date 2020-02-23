import React from 'react';

import {ProductsSection} from '@/parts/';
import {BackButton} from '@/components';
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
