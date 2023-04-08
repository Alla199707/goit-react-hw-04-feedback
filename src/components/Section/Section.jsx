import { Title } from './Section.styled';
import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <div>
      {title && <Title>{title}</Title>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
export default Section;
