/* eslint-disable no-console */
import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`GenreQuestionScreen initial`, () => {
  const formSubmitHandler = jest.fn();
  const checkboxCheckedHandler = jest.fn();

  const mockData = {
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
    screenIndex: 1,
    formSubmitHandler,
    checkboxCheckedHandler
  };

  let wrapper = mount(<GenreQuestionScreen {...mockData}/>);

  it(`calls onAnswer func with the correct data`, () => {
    const input = wrapper.find(`input`).at(0);
    input.simulate(`change`, {
      target: {
        value: `answer-0`,
        checked: true
      }
    });
    expect(checkboxCheckedHandler).toHaveBeenCalledWith({
      target: {checked: true, value: `answer-0`}
    });
  });
});
