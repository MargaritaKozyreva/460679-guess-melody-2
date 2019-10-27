import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";

import PropTypes from "prop-types";

export default class App extends PureComponent {
  static getScreen(
      question,
      props,
      onUserAnswer,
      formSubmitHandler,
      checkboxCheckedHandler
  ) {
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
            formSubmitHandler={formSubmitHandler}
            checkboxCheckedHandler={checkboxCheckedHandler}
          />
        );

      case `artist`:
        return (
          <ArtistQuestionScreen
            screenIndex={question}
            question={currentQuestion}
            formSubmitHandler={formSubmitHandler}
            checkboxCheckedHandler={checkboxCheckedHandler}
          />
        );
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
      userAnswers: []
    };
  }

  formSubmitHandler(evt) {

    evt.preventDefault();
    this.userAnswer();
  }

  userAnswer() {
    let questions = this.props.questions;
    this.setState((prevState) => {

      const nextIndex = prevState.question + 1;
      const isEnd = nextIndex >= questions.length - 1;
      return {
        question: !isEnd ? nextIndex : -1,
        userAnswers: []
      };
    });
  }

  checkboxCheckedHandler(evt) {

    const isChecked = evt.target.checked;
    const checkboxValue = evt.target.value;

    this.changeStateHandler(isChecked, checkboxValue);
  }

  changeStateHandler(isChecked, answers) {
    if (isChecked) {
      this.setState((prevState) => {
        prevState.userAnswers.push(answers);
        let result = prevState.userAnswers;
        return {
          userAnswers: result
        };
      });
    } else {
      this.setState((prevState) => {
        const idx = prevState.userAnswers.indexOf(answers);

        const onePart = prevState.userAnswers.slice(0, idx);
        const twoPart = prevState.userAnswers.slice(idx, prevState.userAnswers.length - 1
        );

        const newArray = [...onePart, ...twoPart];
        return {
          userAnswers: newArray
        };
      });
    }
    return null;
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return App.getScreen(
        question,
        this.props,
        () => this.userAnswer(questions),
        this.formSubmitHandler.bind(this),
        this.checkboxCheckedHandler.bind(this)
    );
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
  settings: PropTypes.shape({
    gameTimes: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired
  })
};
