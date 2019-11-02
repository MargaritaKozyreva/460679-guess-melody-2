import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`Testing AudioPlayer`, () => {
  const onPlayButtonClick = jest.fn();

  const mockData = {
    isPlaying: true,
    onPlayButtonClick,
    src: `https://upload.wikimedia.org/wikipedia/track.ogg`
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  let wrapper = mount(<AudioPlayer {...mockData}/>);

  it(`"true": Check correct changing state when click on button "play"`, () => {
    wrapper.setState({isPlaying: false});
    const button = wrapper.find(`.track__button`);
    button.simulate(`click`);
    const isPlaying = wrapper.state().isPlaying;
    expect(isPlaying).toEqual(true);
  });

  it(`"false" : Check correct changing state when click on button "play"`, () => {
    wrapper.setState({isPlaying: true});
    const button = wrapper.find(`.track__button`);
    button.simulate(`click`);
    const isPlaying = wrapper.state().isPlaying;
    expect(isPlaying).toEqual(false);
  });
});
