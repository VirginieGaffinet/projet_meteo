// import css
import './cityInfo.scss';

const CityInfo = () => {
  return (
    <div className='cityInfo'>
      <div className="cityInfo-weather">
        <img src="" alt="weather info" className="cityInfo-weather-logo" />
        <span>Nuageux</span>
      </div>
      <div className="cityInfo-content">
        <div className="cityInfo-content-info">
          <span>4 m/s</span>
          <span>80%</span>
        </div>
        <span className="cityInfo-content-degre">3°C</span>
      </div>
    </div>
  );
}

export default CityInfo;