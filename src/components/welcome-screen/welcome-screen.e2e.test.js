import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`WelcomeScreen initial`, () => {
  const onStartButtonClick = jest.fn();

  const mockProps = {
    time: 7,
    errorCount: 3,
    onStartButtonClick
  };

  const welcomeScreen = shallow(<WelcomeScreen {...mockProps} />);

  it(`WelcomeScreen clicking the button for start game`, () => {
    const startButton = welcomeScreen.find(`button`);
    startButton.simulate(`click`);
    expect(onStartButtonClick).toHaveBeenCalledTimes(1);
  });
});
