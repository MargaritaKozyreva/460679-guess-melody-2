import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`GenreQuestionScreen initial`, () => {
  const formSubmitHandler = jest.fn();
  const checkboxCheckedHandler = jest.fn();

  const mockData = {
    question: {
      answers: [],
      genre: `test`
    },
    screenIndex: 1,
    formSubmitHandler,
    checkboxCheckedHandler
  };

  let wrapper = shallow(<GenreQuestionScreen {...mockData}/>);

  it(`calls onAnswer func with the correct data`, () => {
    const button = wrapper.find(`form`);
    button.simulate(`submit`, {checkboxCheckedHandler});
    expect(checkboxCheckedHandler).toBeCalled();
  });
});
