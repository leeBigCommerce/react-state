import React from 'react';

import { Title } from './Title';
import { UserActions } from './UserActions';
import { Header } from './Header';
import { MainContent } from './MainContent';

export const Example: React.FC = () => {
    const [buttonClicked, setButtonClicked] = React.useState(false);
    const clickButton = (): void => setButtonClicked(true);

    return (
        <>
            <Header>
                <Title buttonClicked={buttonClicked} />
            </Header>
            <MainContent>
                <UserActions buttonClicked={buttonClicked} onButtonClick={clickButton} />
            </MainContent>
        </>
    );
};
