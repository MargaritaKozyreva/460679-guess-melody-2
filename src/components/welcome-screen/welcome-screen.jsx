import React, {Fragment} from "react";
import PropTypes from 'prop-types';

const WelcomeScreen = ({time, errorCount, onStartButtonClick}) => {
  return (
    <Fragment>
      <section className="welcome">
        <div className="welcome__logo">
          <img
            src="img/melody-logo.png"
            alt="Угадай мелодию"
            width="186"
            height="83"
          />
        </div>
        <button className="welcome__button" onClick={onStartButtonClick}>
          <span className="visually-hidden">Начать игру</span>
        </button>
        <h2 className="welcome__rules-title">Правила игры</h2>
        <p className="welcome__text">Правила просты:</p>
        <ul className="welcome__rules-list">
          <li>За {time} минут нужно ответить на все вопросы.</li>
          <li>Можно допустить {errorCount} ошибки.</li>
        </ul>
        <p className="welcome__text">Удачи!</p>
      </section>
    </Fragment>
  );
};

WelcomeScreen.propTypes = {
  time: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onStartButtonClick: PropTypes.func.isRequired
};

export default WelcomeScreen;

