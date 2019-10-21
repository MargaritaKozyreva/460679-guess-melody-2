import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app";

Enzyme.configure({adapter: new Adapter()});

describe(`App initial`, () => {
  const handleClick = jest.fn();

  const mockProps = {
    gameTimes: 7,
    errorCount: 3,
    handleClick
  };

  const app = shallow(<App {...mockProps} />);

  it(`App clicking the button for start game`, () => {
    const startButton = app.find(`button`);
    startButton.simulate(`click`);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
