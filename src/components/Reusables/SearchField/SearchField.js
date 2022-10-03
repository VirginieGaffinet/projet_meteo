// Prop-types
import PropTypes from 'prop-types';
// == Import : local
import Field from '../Field/Field';
import './searchField.scss';

// == Composant
const SearchField = ({
  id,
  placeholder,
  className,
  type,
  value,
  onChange,
}) => (
  <div>
    <Field
      id={id}
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
);

SearchField.defaultProps = {
  id: '',
  onChange: null,
  value: '',
  placeholder: '',
};

SearchField.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// == Export
export default SearchField;
