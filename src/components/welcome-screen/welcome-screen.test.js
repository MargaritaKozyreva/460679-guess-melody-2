import React from "react";
import WelcomeScreen from "./welcome-screen.jsx";
import renderer from "react-test-renderer";

describe(`WelcomeScreen initial`, () => {

  const onStartButtonClick = jest.fn();

  const mockProps = {
    gameTimes: 7,
    errorCount: 3,
    onStartButtonClick
  };

  it(`WelcomeScreen renders correctly`, () => {
    const tree = renderer.create(<WelcomeScreen {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
