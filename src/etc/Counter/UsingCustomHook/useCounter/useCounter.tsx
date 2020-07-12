import React, { createContext, FC, useContext } from 'react';

import { useNewCounter, UseCounterPayload } from './useNewCounter';

const CounterContext = createContext<UseCounterPayload | undefined>(undefined);

export const CounterProvider: FC = ({ children }) => (
    <CounterContext.Provider value={useNewCounter()}>{children}</CounterContext.Provider>
);

export const useCounter = (): UseCounterPayload => {
    const counterPayload = useContext(CounterContext);

    if (!counterPayload) {
        throw new Error(`'useCounter' needs to be nested within a 'CounterProvider' component.`);
    }

    return counterPayload;
};
