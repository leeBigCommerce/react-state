import React from "react";

import { buttonClickedContext } from './buttonClickedContext';

export const DeeplyNestedTitle: React.FC = () => {
  const { buttonClicked } = React.useContext(buttonClickedContext);

  return <h1>{buttonClicked ? "Thank you" : "Please Click Me"}</h1>;
};
