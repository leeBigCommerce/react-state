import { FC } from 'react';

import { UsingCustomHook } from './UsingCustomHook';
import { UsingReducer } from './UsingReducer';

type Example = [string, FC];

export const allExamples: Example[] = [
    ['UsingCustomHook', UsingCustomHook],
    ['UsingReducer', UsingReducer],
];
