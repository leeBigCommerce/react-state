import React from "react";

import { Title } from './Title';
import { UserActions } from './UserActions';

export const Example: React.FC = () => {
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const clickButton = () => setButtonClicked(true);

  return (
    <>
      <Title buttonClicked={buttonClicked} />
      <UserActions buttonClicked={buttonClicked} onButtonClick={clickButton} />
    </>
  );
};
