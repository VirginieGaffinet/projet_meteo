// import css
import './city.scss';

const City = ({city, time, degre}) => {
  return (
    <div className='cityCard'>
      <h3 className="cityCard-name">{city}</h3>
      <div className="cityCard-info">
        <span className="cityCard-info-time">{time}</span>
        <img src="" alt="weather info" />
        <span className="cityCard-info-degres">{degre}°C</span>
      </div>
    </div>
  )
};

export default City;