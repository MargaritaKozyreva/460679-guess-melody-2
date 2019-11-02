import React, {PureComponent, Fragment, createRef} from "react";

import PropTypes from "prop-types";

export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    const {isPlaying} = this.props;

    this._audioRef = createRef();
    this.state = {
      progress: 0,
      isLoading: false,
      isPlaying
    };

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  render() {
    const {isLoading, isPlaying} = this.state;

    return (
      <Fragment>
        <button
          className={`track__button track__button--${
            isPlaying ? `pause` : `play`
          }`}
          type="button"
          disabled={isLoading}
          onClick={this._onPlayButtonClick}
        />
        <div className="track__status">
          <audio ref={this._audioRef} src={this.props.src}/>
        </div>
      </Fragment>
    );
  }

  componentDidMount() {
    let audio = this._audioRef.current;

    audio.oncanplaythrough = () =>
      this.setState({
        isLoading: false
      });

    audio.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };

    audio.onpause = () =>
      this.setState({
        isPlaying: false
      });

    audio.ontimeupdate = () =>
      this.setState({
        progress: audio.currentTime
      });
  }

  componentDidUpdate() {

    const audio = this._audioRef.current;
    const {isPlaying} = this.props;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {

    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
  }

  _onPlayButtonClick() {
    const {onPlayButtonClick} = this.props;
    onPlayButtonClick();
    this.setState({isPlaying: !this.state.isPlaying});
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
};
