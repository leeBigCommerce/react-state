import React from 'react';

import { Header } from './Header';
import { MainContent } from './MainContent';
import { ButtonClickedProvider } from './buttonClicked';

export const Example: React.FC = () => (
    <ButtonClickedProvider>
        <Header />
        <MainContent />
    </ButtonClickedProvider>
);
