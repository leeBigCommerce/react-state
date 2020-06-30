import React from 'react';

import { Header } from './Header';
import { MainContent } from './MainContent';
import { buttonClickedContext } from './buttonClickedContext';

export const Example: React.FC = () => {
    const [buttonClicked, setButtonClicked] = React.useState(false);
    const clickButton = (): void => setButtonClicked(true);

    return (
        <buttonClickedContext.Provider value={{ buttonClicked, clickButton }}>
            <Header />
            <MainContent />
        </buttonClickedContext.Provider>
    );
};
