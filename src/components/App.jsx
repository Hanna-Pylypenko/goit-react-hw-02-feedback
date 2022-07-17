import React, { Component } from "react";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  goodFeedbackClick = () => {
    this.setState({good: 1})
  }
  neutralFeedbackClick = () => {
    this.setState({neutral: 1})
  }
  badFeedbackClick = () => {
    this.setState({bad: 1})
  }

  render() {
    return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div className="feedbackBtns">
      <h2>Please, leave your feedback</h2>
      <button type="button" className="goodFeedbackBtn" onClick={this.goodFeedbackClick}>Good</button>
      <button type="button"className="neutralFeedbackBtn" onClick={this.neutralFeedbackClick}>Neutral</button>
      <button type="button" className="badFeedbackBtn" onClick={this.badFeedbackClick}>Bad</button>
      </div>
      <div className="statistics">
      <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
        </ul>
      </div>

    </div>)
  };
};
