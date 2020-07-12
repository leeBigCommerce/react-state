import { useState } from 'react';

export interface UseCounterPayload {
    count: number;
    increment(num: number): void;
    decrement(num: number): void;
}

export const useNewCounter = (): UseCounterPayload => {
    const [count, setCount] = useState(0);

    return {
        count,
        increment: (num): void => {
            setCount((currentCount) => currentCount + num);
        },
        decrement: (num): void => {
            setCount((currentCount) => currentCount - num);
        },
    };
};
