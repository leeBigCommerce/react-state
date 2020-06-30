import React from "react";

interface ButtonClickedContextValue {
  buttonClicked: boolean;
  clickButton?: () => void;
}

const defaultButtonClickedContextValue: ButtonClickedContextValue = { buttonClicked: false };

export const buttonClickedContext = React.createContext(defaultButtonClickedContextValue);
