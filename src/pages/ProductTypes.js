import React from 'react';
import ProductsSection from '@/parts/ProductsSection';

class ProductTypes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:5000/api/products/kek');
        xhr.send();
        xhr.onload = (data) => console.log(data, xhr);
    }

    render() {
        return (
            <React.Fragment>
                <ProductsSection />
            </React.Fragment>
        );
    }
};

export default ProductTypes;