import React, { FC } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { reducer } from './reducer';
import { isCounterState } from './state';
import { Type } from './actions';

export const CounterProvider: FC = ({ children }) => <Provider store={createStore(reducer)}>{children}</Provider>;

interface UseCounterPayload {
    count: number;
    increment(num: number): void;
    decrement(num: number): void;
}

export const useCounter = (): UseCounterPayload => {
    const counterState = useSelector((state) => {
        if (isCounterState(state)) {
            return state;
        }
    });
    const dispatch = useDispatch();

    if (!counterState) {
        throw new Error(`'useCounter' needs to be nested within a 'CounterProvider' component.`);
    }

    return {
        count: counterState.count,
        decrement: (num: number): void => {
            dispatch({ type: Type.DECREMENT, payload: num });
        },
        increment: (num: number): void => {
            dispatch({ type: Type.INCREMENT, payload: num });
        },
    };
};
