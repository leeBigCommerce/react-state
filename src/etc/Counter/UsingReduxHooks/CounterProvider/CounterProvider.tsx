import React, { FC } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

interface CounterState {
    count: number;
}

export enum CounterActionsTypes {
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
