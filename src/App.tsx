import React from 'react';

import { Example as SingleComponentState } from './SingleComponentState';
import { Example as OneLevelOfNesting } from './OneLevelOfNesting';
import { Example as FlattenedComponentTree } from './FlattenedComponentTree';
import { Example as DeeplyNestedComponents } from './DeeplyNestedComponents';

export const App: React.FC = () => (
    <>
        <section>
            <h1>State Patterns in Descending Order of Preference</h1>
            <h2>1. For basic component memory:</h2>
            <ul>
                <li>
                    use <code>useState</code>
                </li>
            </ul>
            <h3>Example:</h3>
            <SingleComponentState />
            <hr />
            <h2>2. When multiple components require that state:</h2>
            <ul>
                <li>Place that state in the LOWEST possible scope</li>
                <li>Pass the value in as a prop</li>
            </ul>
            <h3>Example:</h3>
            <OneLevelOfNesting />
            <hr />
            <h2>3. When multiple components require that state, but are deeply nested:</h2>
            <ul>
                <li>
                    Consider re-organizing your code so that components that are concerned with the same values are in
                    the same area
                </li>
                <li>
                    Make use of the <code>children</code> pattern and try flattening your component tree
                </li>
                <li>Place that state in the LOWEST possible scope</li>
                <li>Then pass the value in as a prop</li>
            </ul>
            <h3>Example:</h3>
            <FlattenedComponentTree />
            <hr />
            <h2>
                4. When multiple components require that state, are deeply nested and you&apos;ve somehow reached the
                limit of re-organizing and flattening:
            </h2>
            <ul>
                <li>
                    Make use of <code>context</code>
                </li>
            </ul>
            <h3>Example:</h3>
            <DeeplyNestedComponents />
            <hr />
        </section>
        <section>
            <h1>&quot;Wait, what if...&quot;</h1>
            <ol>
                <li>
                    &quot;I&apos;ve used pattern 4 and have ended up with a bunch of context providers on top of each
                    other?&quot;
                    <ul>
                        <li>Are you sure you&apos;ve got all the providers in their lowest possible scopes?</li>
                        <li>
                            If you are, yet you&apos;ve been forced to add a provider very high in your app, it could be
                            a smell that the repo or the UX needs re-organizing to keep things with the similar concerns
                            in a similar area.
                        </li>
                    </ul>
                </li>
                <li>
                    &quot;The state I&apos;m storing has deeply interrelated attributes; when X value changes within it,
                    Y and Z have to change too&quot;
                    <ul>
                        <li>
                            Sounds like business logic creeping into the view layer. If an Android App and an iPhone App
                            also wanted to portray this view to users, would they need their own implementation of the
                            exact same logic? If so, this should probably be pushed up a layer to your source of truth
                            (e.g. the API providing and receiving changes to this entity).
                        </li>
                    </ul>
                </li>
                <li>
                    &quot;I tried that, but I couldn&apos;t convince the Backend Developers / my app is the highest
                    source of truth for that entity&quot;
                    <ul>
                        <li>
                            Create the API you wish you had by creating a custom hook which (potentially) uses
                            useReducer under the hood
                        </li>
                        <li>
                            Remember to aim for as much decoupling as possible between your custom hook and your visual
                            components
                        </li>
                        <li>
                            You might want to consider persisting this complex state somewhere - what if your user
                            refreshes?
                        </li>
                    </ul>
                </li>
            </ol>
        </section>
    </>
);
