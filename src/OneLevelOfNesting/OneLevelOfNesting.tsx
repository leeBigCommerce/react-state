import React from 'react';

import { Title } from './Title';
import { UserActions } from './UserActions';

export const OneLevelOfNesting: React.FC = () => {
    const [buttonClicked, setButtonClicked] = React.useState(false);
    const clickButton = (): void => setButtonClicked(true);

    return (
        <>
            <Title buttonClicked={buttonClicked} />
            <UserActions buttonClicked={buttonClicked} onButtonClick={clickButton} />
        </>
    );
};
