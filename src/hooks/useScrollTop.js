import {useEffect} from 'react';

export const useScrollTop = () => {
    useEffect(() => {
        if (pageYOffset > 300) {
            scrollTo(0,0);
        }
    },[]);
};
