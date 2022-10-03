// import css
import './searchCity.scss';
// import component
import SearchField from '../../Reusables/SearchField/SearchField';
// import react feather
import { Search as SearchIcon } from 'react-feather';

const SearchCity = () => {
  return (
    <div className='searchCity'>
      <div className='searchCity-container'>
        <form className='searchCity-form'>
          <SearchField
            className="searchCity-form-field"
            placeholder="Londres"
            type="text"
            value=""
            >
          </SearchField>
          <button
            type="submit"
            className="searchCity-form-buttonSubmit"
          >
            <SearchIcon color="#0B0D1F" size="24" />
          </button>
        </form>
      </div>
    </div>
  )
};

export default SearchCity;