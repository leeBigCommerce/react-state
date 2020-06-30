import React from 'react';

export const UserActions: React.FC<{ buttonClicked: boolean; onButtonClick(): void }> = ({
    buttonClicked,
    onButtonClick,
}) => (
    <button disabled={buttonClicked} onClick={onButtonClick}>
        Click Me
    </button>
);
