import React from 'react';
import {copyElementContent} from '@/helpers/copy';

export const Copy = ({
    children,

    handleClick,
    phone,
}) => (
    window.screen.width < 600 ?
        <a href={`tel:+${phone}`}>
            {children}
        </a> :
        <div
            onClick={e => {
                copyElementContent(e.target);
                handleClick();
            }}
        >
            {children}
        </div>
);
