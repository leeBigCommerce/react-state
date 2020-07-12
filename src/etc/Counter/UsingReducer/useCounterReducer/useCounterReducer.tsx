import React, { FC, useContext, useReducer, createContext } from 'react';

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
const reducer = (state: CounterState, action: Action): CounterState => {
    switch (action.type) {
        case CounterActionsTypes.INCREMENT:
            return { count: state.count + action.payload };
        case CounterActionsTypes.DECREMENT:
            return { count: state.count - action.payload };
    }
};

const CounterReducerContext = createContext<[CounterState, React.Dispatch<Action>] | undefined>(undefined);

export const useCounterReducer = (): [CounterState, React.Dispatch<Action>] => {
    const counterReducer = useContext(CounterReducerContext);

    if (!counterReducer) {
        throw new Error(`'useCounterReducer' needs to be nested within a 'CounterProvider' component.`);
    }

    return counterReducer;
};

export const CounterProvider: FC = ({ children }) => {
    const initialState: CounterState = { count: 0 };

    return (
        <CounterReducerContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </CounterReducerContext.Provider>
    );
};
