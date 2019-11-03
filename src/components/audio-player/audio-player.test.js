import React from "React";
import AudioPlayer from "./audio-player.jsx";
import renderer from "react-test-renderer";

describe(`AudioPlayer initial`, () => {
  const onPlayButtonClick = jest.fn();

  let isLoading = true;

  const mockProps = {
    isPlaying: true,
    onPlayButtonClick,
    src: `https://upload.wikimedia.org/wikipedia/track.ogg`
  };

  it(`renders correctly`, () => {
    const tree = renderer
      .create(<AudioPlayer {...mockProps} />, {
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
      })
      .toJSON();
    expect(isLoading).toBe(true);
    expect(tree).toMatchSnapshot();
  });
});
