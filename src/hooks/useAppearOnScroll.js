import {
    useLayoutEffect,
    useRef,
    useState,
} from 'react';

export const useAppearOnScroll = () => {
    const el = useRef();
    const offset = useRef(0);
    const [listening, setListening] = useState(true);

    useLayoutEffect(
        () => {
            if (listening) {
                const handleScroll = () => {
                    const scrollOffset = pageYOffset;
                    if (
                        scrollOffset - offset.current > 100 &&
                        el.current.getBoundingClientRect().top < window.innerHeight / 3
                    ) {
                        setListening(false);
                        el.current.classList.add('appeared');
                    }
                    offset.current = scrollOffset;
                };
                window.addEventListener('scroll', handleScroll);

                return () => window.removeEventListener('scroll', handleScroll);
            }
        },
        [listening],
    );

    return el;
};
