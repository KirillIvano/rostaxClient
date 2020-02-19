import React from 'react';
import PreviewCard from '@/components/PreviewCard';
import styles from './styles.less';
import image from '@/images/paints.jpg';

const ProductsSection = () => {
    return (
        <div className={styles.previewSection}>
            <div className={styles.headline}>
                Наша продукция
            </div>
            <PreviewCard to={'/product_type/0'} image={image}>
                Краски водно-дисперсионные
            </PreviewCard>
            <PreviewCard image={image}></PreviewCard>
            <PreviewCard image={image}></PreviewCard>
            <PreviewCard image={image}></PreviewCard>
            <PreviewCard image={image}></PreviewCard>
        </div>
    );
};

export default ProductsSection;
