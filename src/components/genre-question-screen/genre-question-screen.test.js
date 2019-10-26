import React from "React";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import renderer from "react-test-renderer";

describe(`GenreQuestionScreen initial`, () => {

  const formSubmitHandler = jest.fn();
  const checkboxCheckedHandler = jest.fn();

  const mockProps = {
    question: {
      answers: [],
      genre: `test`
    },
    screenIndex: 0,
    formSubmitHandler,
    checkboxCheckedHandler
  };

  it(`GenreQuestionScreen renders correctly`, () => {
    const tree = renderer.create(<GenreQuestionScreen {...mockProps}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
