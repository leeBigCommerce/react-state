import { FC } from 'react';

import { SingleComponentState } from './SingleComponentState';
import { OneLevelOfNesting } from './OneLevelOfNesting';
import { FlattenedComponentTree } from './FlattenedComponentTree';
import { DeeplyNestedComponents } from './DeeplyNestedComponents';

type Example = [string, FC];

export const allExamples: Example[] = [
    ['SingleComponentState', SingleComponentState],
    ['OneLevelOfNesting', OneLevelOfNesting],
    ['FlattenedComponentTree', FlattenedComponentTree],
    ['DeeplyNestedComponents', DeeplyNestedComponents],
];
