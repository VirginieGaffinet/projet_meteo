// import css
import './cityList.scss';
// import components
import City from './City/City';
// import data
import cityData from '../../../data';

const CityList = () => {
  return (
    <div className='cityList'>
      {
        cityData.map((city) => (
          <City 
            key={city.id}
            city={city.name}
            time={city.time}
            degre={city.degre}
          />
        ))
      }
    </div>

  )
};

export default CityList;