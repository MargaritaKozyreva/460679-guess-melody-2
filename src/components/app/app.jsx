import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";

import PropTypes from 'prop-types';

export default class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {gameTimes, errorCount} = props.settings;

      return (
        <WelcomeScreen
          time={gameTimes}
          errorCount={errorCount}
          onStartButtonClick={onUserAnswer}
        />
      );
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`:
        return (
          <GenreQuestionScreen
            screenIndex={question}
            question={currentQuestion}
            onAnswer={onUserAnswer}
          />
        );

      case `artist`:
        return (
          <ArtistQuestionScreen
            screenIndex={question}
            question={currentQuestion}
            onAnswer={onUserAnswer}
          />
        );
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1
    };
  }

  userAnswer(questions) {
    this.setState((prevState) => {
      const nextIndex = prevState.question + 1;
      const isEnd = nextIndex >= questions.length;

      return {
        question: !isEnd ? nextIndex : -1
      };
    });
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () =>
      this.userAnswer(questions)
    );
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
  settings: PropTypes.shape({
    gameTimes: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired,
  })
};
