import PropTypes from 'prop-types';
import { Button, ButtonList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(name => (
        <Button type="button" key={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </Button>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default FeedbackOptions;
