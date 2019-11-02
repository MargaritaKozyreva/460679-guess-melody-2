import React from "React";
import AudioPlayer from "./audio-player.jsx";
import renderer from "react-test-renderer";

describe(`AudioPlayer initial`, () => {

  const onPlayButtonClick = jest.fn();

  const mockProps = {
    isPlaying: true,
    onPlayButtonClick,
    src: `https://upload.wikimedia.org/wikipedia/track.ogg`
  };

  it(`renders correctly`, () => {
    const tree = renderer.create(<AudioPlayer {...mockProps}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
