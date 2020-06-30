import React from 'react';

import { useButtonClicked } from '../buttonClicked';

export const DeeplyNestedUserActions: React.FC = () => {
    const { buttonClicked, clickButton } = useButtonClicked();

    return (
        <button disabled={buttonClicked} onClick={clickButton}>
            Click Me
        </button>
    );
};
