import React, {PureComponent} from "react";
import AudioPlayer from "../audio-player/audio-player.jsx";

import PropTypes from "prop-types";

export default class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: -1
    };

    this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
  }

  onPlayButtonClick(item) {
    this.setState({
      activePlayer: this.state.activePlayer === item ? -1 : item
    });
  }
  render() {
    const {
      question,
      screenIndex,
      formSubmitHandler,
      checkboxCheckedHandler
    } = this.props;
    const {answers, genre} = question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img
              className="game__logo"
              src="img/melody-logo-ginger.png"
              alt="Угадай мелодию"
            />
          </a>

          <div className="timer__value">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={formSubmitHandler}>
            {answers.map((it, i) => {
              return (
                <div key={`${screenIndex}-answer-${i}`} className="track">
                  <AudioPlayer
                    src={it.src}
                    isPlaying={i === this.state.activePlayer}
                    onPlayButtonClick={() => this.onPlayButtonClick(i)}
                  />
                  <div className="game__answer">
                    <input
                      className="game__input visually-hidden"
                      type="checkbox"
                      name={`${question.type}-${screenIndex}`}
                      value={`answer-${i}`}
                      id={`answer-${i}`}
                      onChange={checkboxCheckedHandler}
                    />
                    <label className="game__check" htmlFor={`answer-${i}`}>
                      Отметить
                    </label>
                  </div>
                </div>
              );
            })}
            <button className="game__submit button" type="submit">
              Ответить
            </button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string,
    type: PropTypes.string
  }),
  screenIndex: PropTypes.number.isRequired,
  formSubmitHandler: PropTypes.func.isRequired,
  checkboxCheckedHandler: PropTypes.func.isRequired
};
