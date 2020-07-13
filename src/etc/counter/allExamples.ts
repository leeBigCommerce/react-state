import { FC } from 'react';

import * as customHook from './customHook';
import * as useReducer from './useReducer';
import * as reduxHooks from './reduxHooks';

interface API {
    useCounter: () => { count: number; increment(num: number): void; decrement(num: number): void };
    CounterProvider: FC;
}

type Example = [string, API];

export const allExamples: Example[] = [
    ['customHook', customHook],
    ['useReducer', useReducer],
    ['reduxHooks', reduxHooks],
];
