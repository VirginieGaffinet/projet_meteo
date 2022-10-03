// import css
import './mainPage.scss';
// import components
import PlusButton from './PlusButton/PlusButton';
import SearchCity from './SearchCity/SearchCity';
import Welcome from './Welcome/Welcome';
import CityList from './CityList/CityList';

const MainPage = () => {
  return (
    <div className='mainPageContainer'>
      <PlusButton />
      {/* <SearchCity /> */}
      <Welcome />
      <CityList />
    </div>
  )
};

export default MainPage;