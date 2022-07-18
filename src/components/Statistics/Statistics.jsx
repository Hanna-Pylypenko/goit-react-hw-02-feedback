import React from 'react';
import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <ul className={css.feedbackBtnList}>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive feedback:{positivePercentage}</li>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};
