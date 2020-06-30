import React from 'react';

import { DeeplyNestedTitle } from './DeeplyNestedTitle';
import { DeeplyNestedUserActions } from './DeeplyNestedUserActions';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { buttonClickedContext } from './buttonClickedContext';

export const Example: React.FC = () => {
    const [buttonClicked, setButtonClicked] = React.useState(false);
    const clickButton = () => setButtonClicked(true);

    return (
        <buttonClickedContext.Provider value={{ buttonClicked, clickButton }}>
            <Header>
                <DeeplyNestedTitle />
            </Header>
            <MainContent>
                <DeeplyNestedUserActions />
            </MainContent>
        </buttonClickedContext.Provider>
    );
};
