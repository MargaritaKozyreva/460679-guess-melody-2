import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`e2e: ArtistQuestionScreen initial`, () => {
  const formSubmitHandler = jest.fn();
  const checkboxCheckedHandler = jest.fn();

  const mockData = {
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

  let wrapper = mount(<ArtistQuestionScreen {...mockData}/>);

  it(`calls onAnswer func with the correct data`, () => {
    const input = wrapper.find(`input`).at(0);
    input.simulate(`change`, {
      target: {
        value: `artist-0`,
        checked: true
      }
    });
    expect(checkboxCheckedHandler).toHaveBeenCalledWith({target: {
      value: `artist-0`,
      checked: true
    }});
  });
});
