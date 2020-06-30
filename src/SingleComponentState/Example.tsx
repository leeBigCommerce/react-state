import React from "react";

export const Example: React.FC = () => {
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const clickButton = () => setButtonClicked(true);

  return (
    <>
      <h1>{buttonClicked ? "Thank you" : "Please click the button"}</h1>
      <button disabled={buttonClicked} onClick={clickButton}>
        Click Me
      </button>
    </>
  );
};
