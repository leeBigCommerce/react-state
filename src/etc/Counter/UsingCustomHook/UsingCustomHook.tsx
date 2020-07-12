import React, { FC } from 'react';
import { useCounter, CounterProvider } from './useCounter/useCounter';

const FirstComponent: FC = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <>
            <h1>First Component: {count}</h1>
            <button onClick={(): void => increment(37)}>Add 37</button>
            <button onClick={(): void => decrement(5)}>Minus 5</button>
        </>
    );
};

const SecondComponent: FC = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <>
            <h1>Second Component: {count}</h1>
            <button onClick={(): void => increment(2)}>Add 2</button>
            <button onClick={(): void => decrement(15)}>Minus 15</button>
        </>
    );
};

export const UsingCustomHook: FC = () => (
    <CounterProvider>
        <FirstComponent />
        <SecondComponent />
    </CounterProvider>
);
