// import css
import './cityPage.scss';
// import components
import BackButton from './BackButton/BackButton';
import CityName from './CityName/CityName';
import CityInfo from './CityInfo/CityInfo';

const CityPage = () => {
  return (
    <div className='cityPage'>
      <BackButton />
      <CityName />
      <CityInfo />
    </div>
  )
}

export default CityPage