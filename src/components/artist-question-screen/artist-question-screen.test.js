import React from "React";
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import renderer from "react-test-renderer";

describe(`snapshot: ArtistQuestionScreen initiall`, () => {
  const formSubmitHandler = jest.fn();
  const checkboxCheckedHandler = jest.fn();

  let isLoading = true;

  const mockProps = {
    question: {
      type: `artist`,
      song: {
        artist: `Queen`,
        src: `https://upload.wikimedia.org/wikipedia/en/transcoded/2/2a/Queen_-_News_Of_The_World_-_We_Will_Rock_You.ogg/Queen_-_News_Of_The_World_-_We_Will_Rock_You.ogg.mp3`
      },
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
    const tree = renderer
      .create(<ArtistQuestionScreen {...mockProps} />, {
        createNodeMock: (element) => {
          if (element.type === `audio`) {
            return {
              oncanplaythrough: () => {
                isLoading = false;
              }
            };
          }
          return null;
        }
      })
      .toJSON();
    expect(isLoading).toBe(true);
    expect(tree).toMatchSnapshot();
  });
});
