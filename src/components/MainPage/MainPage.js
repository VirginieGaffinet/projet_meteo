// import hooks
import { useSelector } from 'react-redux';
// import css
import './mainPage.scss';
// import components
import PlusButton from './PlusButton/PlusButton';
import SearchCity from './SearchCity/SearchCity';
import Welcome from './Welcome/Welcome';
import CityList from './CityList/CityList';

const MainPage = () => {
  const showSearch = useSelector((state) => state.reducer.search.showSearch);
  return (
    <div className='mainPageContainer'>
      {showSearch ? <SearchCity /> : <PlusButton />}
      <Welcome />
      <CityList />
    </div>
  )
};

export default MainPage;