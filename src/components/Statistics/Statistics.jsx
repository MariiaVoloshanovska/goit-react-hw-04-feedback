import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';

export default function FeedbackOptions({
  good,
  neutral,
  bad,
  test,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>test: {test}</li>
      <li>Total: {total}</li>
      <li>
        Positive feedback:
        {positivePercentage}%
      </li>
    </StatisticsList>
  );
}

FeedbackOptions.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};