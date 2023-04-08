import { Info } from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <Info>{message}</Info>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
