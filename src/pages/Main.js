import React from 'react';
import About from '@/parts/About';
import HeadlinePicture from '../parts/HeadlinePicture';

const Main = () => {
    return (
        <React.Fragment>
            <HeadlinePicture />
            <About />
        </React.Fragment>
    );
};

export default Main;