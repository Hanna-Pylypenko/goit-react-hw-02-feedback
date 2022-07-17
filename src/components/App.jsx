import React, { Component } from "react";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    
  }
  
  goodFeedbackClick = () => {
    this.setState((prevstate) => ({good: prevstate.good + 1}))
  }
  neutralFeedbackClick = () => {
    this.setState((prevstate) => ({neutral: prevstate.neutral + 1}))
  }
  badFeedbackClick = () => {
    this.setState((prevstate) => ({bad: prevstate.bad + 1}))
  }
  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;

  }
  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round(this.state.good/this.countTotalFeedback()*100) + "%";
    return positiveFeedbackPercentage;
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
        {this.state.good||this.state.neutral||this.state.bad ? <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Total:{this.countTotalFeedback()}</li>
          <li>Positive feedback:{this.countPositiveFeedbackPercentage()}</li>
        </ul> : "There is no feedback"}
        
      </div>
    </div>)
  };
};
