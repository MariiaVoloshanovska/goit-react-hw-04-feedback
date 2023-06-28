import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};
