import { FC } from 'react';

import { allExamples } from './allExamples';
import { createUserInterface } from './createUserInterface';

type Example = [string, FC];

export const allExamplesWithUI: Example[] = allExamples.map(([name, { useCounter, CounterProvider }]) => [
    `UI consuming '${name}'`,
    createUserInterface(useCounter, CounterProvider),
]);
