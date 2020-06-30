import React from 'react';

import { buttonClickedContext } from './buttonClickedContext';

export const DeeplyNestedUserActions: React.FC = () => {
    const { buttonClicked, clickButton } = React.useContext(buttonClickedContext);

    return clickButton ? (
        <button disabled={buttonClicked} onClick={clickButton}>
            Click Me
        </button>
    ) : null;
};
