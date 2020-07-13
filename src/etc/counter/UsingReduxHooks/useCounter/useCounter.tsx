import React, { FC } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// TODO: separate into smaller files

interface CounterState {
    count: number;
}

const isCounterState = (state: object): state is CounterState => typeof (state as CounterState).count === 'number';

enum CounterActionsTypes {
    'INCREMENT' = 'INCREMENT',
    'DECREMENT' = 'DECREMENT',
}

interface Action {
    type: CounterActionsTypes;
    payload: number;
}

// eslint-disable-next-line complexity
const reducer = (state: CounterState = { count: 0 }, action: Action): CounterState => {
    switch (action.type) {
        case CounterActionsTypes.INCREMENT:
            return { count: state.count + action.payload };
        case CounterActionsTypes.DECREMENT:
            return { count: state.count - action.payload };
        default:
            return state;
    }
};

export const CounterProvider: FC = ({ children }) => <Provider store={createStore(reducer)}>{children}</Provider>;

export interface UseCounterPayload {
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
            dispatch({ type: CounterActionsTypes.DECREMENT, payload: num });
        },
        increment: (num: number): void => {
            dispatch({ type: CounterActionsTypes.INCREMENT, payload: num });
        },
    };
};
