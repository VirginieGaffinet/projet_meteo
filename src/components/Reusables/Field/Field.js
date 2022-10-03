// == Import : local
import PropTypes from 'prop-types';

import './field.scss';

// == Composant
const Field = ({
  id,
  label,
  placeholder,
  className,
  type,
  value,
  onChange,
  minLength,
  required,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };
  return (
    <>
      {/* Si on ne renseigne pas de label, alors il ne s'affiche pas dans le DOM */}
      {label && (<label htmlFor={id}>{label}</label>)}
      <input
        id={id}
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        minLength={minLength}
        onChange={handleChange}
        required={required}
      />
    </>
  );
};

Field.defaultProps = {
  id: '',
  label: '',
  onChange: null,
  value: '',
  placeholder: '',
  minLength: '0',
  required: '',
};

Field.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  minLength: PropTypes.string,
  required: PropTypes.string,
};

// == Export
export default Field;
