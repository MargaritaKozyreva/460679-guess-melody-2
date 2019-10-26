import React from "React";
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import renderer from "react-test-renderer";

describe(`ArtistQuestionScreen initial`, () => {
  const onAnswer = jest.fn();
  const mockProps = {
    question: {
      answers: []
    },
    screenIndex: 0,
    onAnswer
  };

  it(`ArtistQuestionScreen renders correctly`, () => {
    const tree = renderer.create(<ArtistQuestionScreen {...mockProps}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
