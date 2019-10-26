import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`ArtistQuestionScreen initial`, () => {
  const mockFunction = jest.fn();

  const mockData = {
    question: {
      answers: []
    },
    screenIndex: 1,
    onAnswer: mockFunction
  };

  let wrapper = shallow(<ArtistQuestionScreen {...mockData}/>);

  it(`calls onAnswer func with the correct data'`, () => {
    wrapper.find(`.game__artist`).simulate(`change`);
    expect(mockFunction).toHaveBeenCalledWith();
  });
});
