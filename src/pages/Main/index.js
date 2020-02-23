import React from 'react';

import {
    HeadlinePicture,
    About,
} from '@/parts';
import {useScrollTop} from '@/hooks/useScrollTop';

const Main = () => {
    useScrollTop();

    return (
        <>
            <HeadlinePicture />
            <About />
        </>
    );
};

export default Main;
