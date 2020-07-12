import { FC } from 'react';

import { UsingCustomHook } from './UsingCustomHook';
import { UsingReducer } from './UsingReducer';
import { UsingReduxHooks } from './UsingReduxHooks';

type Example = [string, FC];

export const allExamples: Example[] = [
    ['UsingCustomHook', UsingCustomHook],
    ['UsingReducer', UsingReducer],
    ['UsingReduxHooks', UsingReduxHooks],
];
