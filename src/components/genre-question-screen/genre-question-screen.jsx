import React from "react";
import PropTypes from 'prop-types';

const GenreQuestionScreen = ({question, screenIndex, formSubmitHandler, checkboxCheckedHandler}) => {
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
        <form
          className="game__tracks"
          onSubmit={formSubmitHandler}
        >
          {answers.map((it, i) => {
            return (
              <div key={`${screenIndex}-answer-${i}`} className="track">
                <button
                  className="track__button track__button--play"
                  type="button"
                />
                <div className="track__status">
                  <audio />
                </div>
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
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
};

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.array.isRequired,
    genre: PropTypes.string
  }),
  screenIndex: PropTypes.number.isRequired,
  formSubmitHandler: PropTypes.func.isRequired,
  checkboxCheckedHandler: PropTypes.func.isRequired
};

export default GenreQuestionScreen;
