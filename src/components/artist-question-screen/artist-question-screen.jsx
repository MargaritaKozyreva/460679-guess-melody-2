import React from "react";

import PropTypes from "prop-types";

const ArtistQuestionScreen = ({
  question,
  screenIndex,
  onAnswer
}) => {

  const {answers} = question;
  return (
    <div id="game-artist">
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img
              className="game__logo"
              src="img/melody-logo-ginger.png"
              alt="Угадай мелодию"
            />
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="timer"
            viewBox="0 0 780 780"
          >
            <circle
              className="timer__line"
              cx={390}
              cy={390}
              r={370}
              style={{
                filter: `url(#blur)`,
                transform: `rotate(-90deg) scaleY(-1)`,
                transformOrigin: `center`
              }}
            />
          </svg>
          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>
          <div className="game__mistakes">
            <div className="wrong" />
            <div className="wrong" />
            <div className="wrong" />
          </div>
        </header>
        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <button
                className="track__button track__button--play"
                type="button"
              />
              <div className="track__status">
                <audio />
              </div>
            </div>
          </div>
          <form className="game__artist" onChange={onAnswer}>
            {answers.map((elem, i) => {
              return (
                <div key = {`${screenIndex}-answer-${i}`} className="artist">
                  <input
                    className="artist__input visually-hidden"
                    type="radio"
                    name="answer"
                    defaultValue={`artist-${i}`}
                    id={`answer-${i}`}
                  />
                  <label className="artist__name" htmlFor={`answer-${i}`}>
                    <img
                      className="artist__picture"
                      src={elem.picture}
                      alt={elem.artist}
                    />
                    {elem.artist}
                  </label>
                </div>
              );
            })}
          </form>
        </section>
      </section>
    </div>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.array.isRequired
  }),
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default ArtistQuestionScreen;


