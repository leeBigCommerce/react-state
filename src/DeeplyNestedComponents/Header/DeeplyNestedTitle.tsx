import React from 'react';

import { useButtonClicked } from '../buttonClicked';

export const DeeplyNestedTitle: React.FC = () => {
    const { buttonClicked } = useButtonClicked();

    return <h1>{buttonClicked ? 'Thank you' : 'Please click the button'}</h1>;
};
