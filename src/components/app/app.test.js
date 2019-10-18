import React from "react";
import App from "./app";
import renderer from "react-test-renderer";

it(`App renders correctly`, () => {
  const tree = renderer.create(<App gameTimes = {7} errorCount={3}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
