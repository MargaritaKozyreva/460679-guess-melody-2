import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`GenreQuestionScreen initial`, () => {
  const mockFunction = jest.fn();

  const mockData = {
    question: {
      answers: [],
      genre: `test`
    },
    screenIndex: 1,
    onAnswer: mockFunction
  };

  let wrapper = shallow(<GenreQuestionScreen {...mockData}/>);

  it(`calls onAnswer func with the correct data'`, () => {
    const button = wrapper.find(`form`);
    button.simulate(`submit`, {mockFunction});
    expect(mockFunction).toBeCalled();
  });
});
