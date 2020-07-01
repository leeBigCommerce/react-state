import React from 'react';

import { Example as SingleComponentState } from './SingleComponentState';
import { Example as OneLevelOfNesting } from './OneLevelOfNesting';
import { Example as FlattenedComponentTree } from './FlattenedComponentTree';
import { Example as DeeplyNestedComponents } from './DeeplyNestedComponents';

export const App: React.FC = () => (
    <section>
        <h1>Problem 1 Example</h1>
        <SingleComponentState />
        <p>
            (see &quot;<code>./src/SingleComponentState</code>&quot; for code)
        </p>
        <hr />
        <h1>Problem 2 Example</h1>
        <OneLevelOfNesting />
        <p>
            (see &quot;<code>./src/OneLevelOfNesting</code>&quot; for code)
        </p>
        <hr />
        <h1>Problem 3 Example</h1>
        <FlattenedComponentTree />
        <p>
            (see &quot;<code>./src/FlattenedComponentTree</code>&quot; for code)
        </p>
        <hr />
        <h1>Problem 4 Example</h1>
        <DeeplyNestedComponents />
        <p>
            (see &quot;<code>./src/DeeplyNestedComponents</code>&quot; for code)
        </p>
        <hr />
    </section>
);
