import React, { FC, useContext, useReducer, createContext } from 'react';

import { reducer } from './reducer';
import { State } from './state';
import { Type, Action } from './actions';

const CounterReducerContext = createContext<[State, React.Dispatch<Action>] | undefined>(undefined);

export const CounterProvider: FC = ({ children }) => {
    const initialState: State = { count: 0 };

    return (
        <CounterReducerContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </CounterReducerContext.Provider>
    );
};

interface UseCounterPayload {
    count: number;
    increment(num: number): void;
    decrement(num: number): void;
}

export const useCounter = (): UseCounterPayload => {
    const counterReducer = useContext(CounterReducerContext);

    if (!counterReducer) {
        throw new Error(`'useCounter' needs to be nested within a 'CounterProvider' component.`);
    }

    const [counterState, dispatch] = counterReducer;

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
