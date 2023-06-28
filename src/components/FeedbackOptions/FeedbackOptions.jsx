import PropTypes from 'prop-types';
import { getColorLable } from './helpers';
import { FeedbackFormButton } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <FeedbackFormButton
          key={option}
          type="button"
          data={option}
          onClick={() => onLeaveFeedback(option)}
          color={getColorLable(option)}
        >
          {option}
        </FeedbackFormButton>
      ))}
    </div>
  );
}

FeedbackOptions.protoTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
