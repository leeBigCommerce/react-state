import React from "react";

export const Title: React.FC<{ buttonClicked: boolean }> = ({ buttonClicked }) => (
  <h1>{buttonClicked ? "Thank you" : "Please click the button"}</h1>
);
