import React, {Fragment} from "react";
import PropTypes from 'prop-types';

const App = ({gameTimes, errorCount}) => {
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
        <button className="welcome__button">
          <span className="visually-hidden">Начать игру</span>
        </button>
        <h2 className="welcome__rules-title">Правила игры</h2>
        <p className="welcome__text">Правила просты:</p>
        <ul className="welcome__rules-list">
          <li>За {gameTimes} минут нужно ответить на все вопросы.</li>
          <li>Можно допустить {errorCount} ошибки.</li>
        </ul>
        <p className="welcome__text">Удачи!</p>
      </section>
    </Fragment>
  );
};

App.propTypes = {
  gameTimes: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
};

export default App;

