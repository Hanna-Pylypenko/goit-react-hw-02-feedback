export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        key={option}
        type="button"
        className="feedbackBtn"
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    );
  });
};
