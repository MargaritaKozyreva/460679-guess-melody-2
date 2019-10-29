import React from "react";
import App from "./app";
import renderer from "react-test-renderer";

describe(`App initial`, () => {

  const mockProps = {
    questions: [],
    settings: {
      gameTimes: 1,
      errorCount: 1,
    },
  };

  it(`App renders correctly`, () => {
    const tree = renderer.create(<App {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
