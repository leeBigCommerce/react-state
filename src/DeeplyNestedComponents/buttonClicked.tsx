import React, { useContext } from 'react';

interface ButtonClickedPayload {
    buttonClicked: boolean;
    clickButton: () => void;
}

const buttonClickedContext = React.createContext<ButtonClickedPayload | undefined>(undefined);

export const ButtonClickedProvider: React.FC = ({ children }) => {
    const buttonClickedContextValue = useContext(buttonClickedContext);

    if (buttonClickedContextValue) {
        throw new Error(`Do not nest multiple 'ButtonClickedProvider' components.`);
    }

    const [buttonClicked, setButtonClicked] = React.useState(false);
    const clickButton = (): void => setButtonClicked(true);

    return (
        <buttonClickedContext.Provider value={{ buttonClicked, clickButton }}>{children}</buttonClickedContext.Provider>
    );
};

export const useButtonClicked = (): ButtonClickedPayload => {
    const buttonClickedContextValue = useContext(buttonClickedContext);

    if (!buttonClickedContextValue) {
        throw new Error(`'useButtonClicked' needs to be nested within a 'ButtonClickedProvider' component.`);
    }

    return buttonClickedContextValue;
};
