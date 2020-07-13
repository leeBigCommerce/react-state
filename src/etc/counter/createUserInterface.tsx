import React, { FC } from 'react';

type CreateUserInterface = (
    useCounter: () => { count: number; increment(num: number): void; decrement(num: number): void },
    CounterProvider: FC,
) => FC;

export const createUserInterface: CreateUserInterface = (useCounter, CounterProvider) => {
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

    const UserInterface: FC = () => (
        <CounterProvider>
            <FirstComponent />
            <SecondComponent />
        </CounterProvider>
    );

    return UserInterface;
};
