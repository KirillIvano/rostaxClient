import React from 'react';

import {ProductsSection} from '@/parts/ProductsSection';
import {BackButton} from '@/components/BackButton';

export const ProductTypes = () => (
    <>
        <ProductsSection />
        <BackButton url={'/'} />
    </>
);

export default ProductTypes;
