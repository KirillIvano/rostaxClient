import {useEffect, useRef} from 'react';

export const useAppearOnStart = () => {
    const el = useRef();

    useEffect(
        () => {
            setTimeout(() => {
                el.current.classList.add('appeared');
            }, 100);
        }, [],
    );

    return el;
};
