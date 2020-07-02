import React, { FC, StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { allExamples } from './allExamples';

const Examples: FC = () => (
    <>
        {allExamples.map(([name, Component]) => (
            <>
                <section>
                    <h1>{name} Example</h1>
                    <Component />
                    <p>
                        (see &quot;<code>./src/{name}</code>&quot; for code)
                    </p>
                </section>
                <hr />
            </>
        ))}
    </>
);

ReactDOM.render(
    <StrictMode>
        <Examples />
    </StrictMode>,
    document.getElementById('root'),
);
