import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`ArtistQuestionScreen initial`, () => {
  const formSubmitHandler = jest.fn();
  const checkboxCheckedHandler = jest.fn();

  const mockData = {
    question: {
      answers: []
    },
    screenIndex: 1,
    formSubmitHandler,
    checkboxCheckedHandler
  };

  let wrapper = shallow(<ArtistQuestionScreen {...mockData}/>);

  it(`calls onAnswer func with the correct data'`, () => {
    const button = wrapper.find(`form`);
    button.simulate(`submit`, {checkboxCheckedHandler});
    expect(checkboxCheckedHandler).toBeCalled();
  });
});
