import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        key={option}
        type="button"
        className={css.feedbackBtn}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    );
  });
};
