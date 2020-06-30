import React from 'react';

import { useButtonClicked } from '../buttonClicked';

export const DeeplyNestedUserActions: React.FC = () => {
    const { buttonClicked, clickButton } = useButtonClicked();

    return clickButton ? (
        <button disabled={buttonClicked} onClick={clickButton}>
            Click Me
        </button>
    ) : null;
};
