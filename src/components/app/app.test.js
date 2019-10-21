import React from "react";
import App from "./app";
import renderer from "react-test-renderer";

describe(`App initial`, () => {

  const handleClick = jest.fn();

  const mockProps = {
    gameTimes: 7,
    errorCount: 3,
    handleClick
  };

  it(`App renders correctly`, () => {
    const tree = renderer.create(<App {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
