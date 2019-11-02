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

  let wrapper = mount(<AudioPlayer {...mockData}/>);

  it(`Check correct changing state when click on button "play"`, () => {

    wrapper.state({isPlaying: false});

    const button = wrapper.find(`.track__button`);
    button.simulate(`click`);
    expect(onPlayButtonClick).toHaveBeenCalled();
    wrapper.setState({isPlaying: true});
    wrapper = wrapper.update();
    expect(`isPlaying` in wrapper.state()).toEqual(true);
    button.simulate(`click`);
    expect(onPlayButtonClick).toHaveBeenCalled();
    wrapper.setState({isPlaying: false});
    wrapper = wrapper.update();
    expect(`isPlaying` in wrapper.state()).toEqual(false);
  });
});
