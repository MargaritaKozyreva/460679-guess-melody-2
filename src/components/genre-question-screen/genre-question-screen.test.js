import React from "React";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import renderer from "react-test-renderer";

describe(`GenreQuestionScreen initial`, () => {

  const onAnswer = jest.fn();
  const mockProps = {
    question: {
      answers: []
    },
    screenIndex: 0,
    onAnswer,
  };

  it(`GenreQuestionScreen renders correctly`, () => {
    const tree = renderer.create(<GenreQuestionScreen {...mockProps}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
