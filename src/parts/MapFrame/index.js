import React from 'react';

import {googleMapUrl} from '@/strings';

export const MapFrame = ({
    width='100%',
    height=450,
}) => (
    <iframe
        src={googleMapUrl}
        width={width}
        height={height}
        frameBorder="0"
        style={{border: 0}}
    />
);

