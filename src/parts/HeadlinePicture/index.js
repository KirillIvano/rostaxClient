import React from 'react';
import {Parallax} from 'react-parallax';
import image from './../../images/paints.jpg';
import HeadlineContent from './HeadlineContent';

const HeadlinePicture = () => {
    return (
        <Parallax
            bgImage={image}
            bgImageAlt="the cat"
            strength={500}
        >
            <HeadlineContent />
        </Parallax>
    );
};

export default HeadlinePicture;
