import React from "React";
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import renderer from "react-test-renderer";

describe(`ArtistQuestionScreen initial`, () => {

  const formSubmitHandler = jest.fn();
  const checkboxCheckedHandler = jest.fn();

  const mockProps = {
    question: {
      answers: [
        {
          picture: `http://placehold.it/134x134`,
          artist: `John Snow`
        },
        {
          picture: `http://placehold.it/134x134`,
          artist: `Jack Daniels`
        },
        {
          picture: `http://placehold.it/134x134`,
          artist: `Jim Beam`
        }
      ]
    },
    screenIndex: 0,
    formSubmitHandler,
    checkboxCheckedHandler
  };

  it(`ArtistQuestionScreen renders correctly`, () => {
    const tree = renderer.create(<ArtistQuestionScreen {...mockProps}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
