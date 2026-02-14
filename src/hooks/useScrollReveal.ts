import { useState, useEffect, RefObject } from 'react';

export const useScrollReveal = (ref: RefObject<HTMLElement>, threshold = 0.1) => {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, threshold]);

    return isRevealed;
};
