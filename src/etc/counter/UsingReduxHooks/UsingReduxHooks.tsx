import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CounterProvider, CounterActionsTypes } from './CounterProvider';

const FirstComponent: FC = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <>
            <h1>First Component: {count}</h1>
            <button onClick={(): void => dispatch({ type: CounterActionsTypes.INCREMENT, payload: 37 })}>Add 37</button>
            <button onClick={(): void => dispatch({ type: CounterActionsTypes.DECREMENT, payload: 5 })}>Minus 5</button>
        </>
    );
};

const SecondComponent: FC = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Second Component: {count}</h1>
            <button onClick={(): void => dispatch({ type: CounterActionsTypes.INCREMENT, payload: 2 })}>Add 2</button>
            <button onClick={(): void => dispatch({ type: CounterActionsTypes.DECREMENT, payload: 15 })}>
                Minus 15
            </button>
        </>
    );
};

export const UsingReduxHooks: FC = () => (
    <CounterProvider>
        <FirstComponent />
        <SecondComponent />
    </CounterProvider>
);
