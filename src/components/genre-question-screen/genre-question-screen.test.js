import React from "React";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import renderer from "react-test-renderer";

describe(`GenreQuestionScreen initiall`, () => {

  const formSubmitHandler = jest.fn();
  const checkboxCheckedHandler = jest.fn();

  let isLoading = true;

  const mockProps = {
    question: {
      answers: [
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `rock`
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `pop`
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `jazz`
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `rock`
        }
      ],
      genre: `test`
    },
    screenIndex: 0,
    formSubmitHandler,
    checkboxCheckedHandler
  };

  it(`GenreQuestionScreen renders correctly`, () => {
    const tree = renderer.create(<GenreQuestionScreen {...mockProps}/>, {
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
    }).toJSON();
    expect(isLoading).toBe(true);
    expect(tree).toMatchSnapshot();
  });
});
